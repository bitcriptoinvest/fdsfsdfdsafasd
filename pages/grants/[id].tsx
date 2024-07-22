import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useRouter } from "next/router";
import useGetSnapshotProposals from "../../queries/useGetSnapshotProposals";
import useGetSnapshotVotes, { Vote } from "../../queries/useGetSnapshotVotes";
import Moment from "react-moment";
import { truncateAddress } from "../../utils/wallet";
import { getGrantStatus } from "../../utils/grants";
import useGetGrantsCouncil from "../../queries/useCurrentCouncil";

const Votes: React.FC<{ votes: Record<string, Vote> }> = ({ votes }) => {
  const councilQuery = useGetGrantsCouncil();
  return (
    <>
      {Object.entries(votes).map(([address, voteObject]) => {
        const member = councilQuery.data?.results.find(
          (m) => m.address.toLowerCase() === address.toLowerCase()
        );

        const voterHandle = member?.username;
        const vote = voteObject.choice === 1 ? "Yes" : "No";

        return (
          <div key={address} className="voter-wrapper">
            <div className="row">
              <div
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: "50%",
                  border: "2px solid #29b6af",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Avatar"
                  className="member-avatar"
                  src="/img/blue-x.png"
                  style={{ transform: "scale(0.7)" }}
                />
              </div>
              <div className="col-md-5 col-sm-12 vertical-align">
                {voteObject.voter}
              </div>
              <div className="align-center col-md-3 col-sm-12 vertical-align">
                {voterHandle ?? "-"}
              </div>
              <div className="align-center col-md-3 col-sm-12 vertical-align">
                <div className="utility-btn">
                  <div>
                    <div className="vertical-align grants-yes">{vote}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default function Grant() {
  const id = useRouter().query.id as string;

  const snapshotProposalsQuery = useGetSnapshotProposals();
  const proposals = snapshotProposalsQuery?.data;

  const snapshotVotesQuery = useGetSnapshotVotes([id]);
  const votesByProposalId = snapshotVotesQuery?.data;

  const proposal = proposals?.find((item) => item.id === id);
  const votes = proposal && votesByProposalId?.[proposal.id];

  const { yesVotes, noVotes } = Object.values(votes || {}).reduce(
    (acc, val) => {
      if (val.choice === 1) acc.yesVotes++;
      if (val.choice === 2) acc.noVotes++;
      return acc;
    },
    { yesVotes: 0, noVotes: 0 }
  );
  if (!proposal) {
    return null;
  }
  return (
    <>
      <Head>
        <title>{proposal.title} | Synthetix Initiatives</title>
      </Head>

      <Header />

      <main>
        <Navbar />

        {/* ========================= Synthetix Grants Individual hero-section Start ========================= */}
        <section className="synth-grants-indi-section" id="grants">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-md-12">
                <div className="hero-content grants-individual-vh">
                  <div className="synth-gdao-grants-mini-logo">
                    <img
                      alt="Logo"
                      className="gdao-mini-logo"
                      src="/img/logo/synthetix_gdao_logo_mini.svg"
                    />
                  </div>
                  <h1
                    className="synth-grants-h wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    GRANT APPLICATION
                  </h1>
                  <h4
                    className="wow fadeInUp grants-indi-description align-center"
                    data-wow-delay=".6s"
                    style={{ color: "#00D1FF" }}
                  >
                    {proposal.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================= Synthetix Grants Individual hero-section Start End ========================= */}
        {/* ========================= Pager Start ========================= */}
        <div className="grant-indi-bg">
          <div className="container">
            <div className="row grants-pager-wrapper">
              <div className="col-md-12">
                <ul className="pager">
                  <li className="previous">
                    <Link href="/grants" scroll={false}>
                      <a className="grants-pager-link">
                        <span className="synth-up-arrow">
                          <img
                            alt="Arrow"
                            className="pager-icons"
                            src="/img/grants/gdao-previous.svg"
                          />
                        </span>
                        BACK TO GRANTS
                      </a>
                    </Link>
                  </li>
                  <li className="next">
                    <Link href="/grants" scroll={false}>
                      <a className="grants-pager-link">
                        NEXT GRANT
                        <span className="synth-up-arrow">
                          <img
                            alt="Arrow"
                            className="pager-icons"
                            src="/img/grants/gdao-next.svg"
                          />
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ========================= Pager End ========================= */}
          {/* ========================= Blue Banner Start ========================= */}
          <div className="container-fluid synth-tab-styling">
            <div className="indi-grants-h-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="synth-tabs">
                      <span className="request no-margin bio-info">
                        <span className="bio-info">Requested by </span>
                        <span className="bio-info synth-blue">
                          {proposal.author}
                        </span>{" "}
                        in
                        <span className="bio-info synth-pink"> Grants </span>
                        <span className="sm-font bio-info">
                          on{" "}
                          <span className="synth-blue">
                            <Moment
                              unix
                              date={proposal.start}
                              format="D MMM YYYY"
                            />
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========================= Blue Banner End ========================= */}
          {/* ========================= grantsDAO Introduction ========================= */}
          <section className="grants-introduction markdown-container">
            <div className="container">
              <div className="row grants-descr-wrapper padding-bottom">
                <div className="h4-grants-dao-descr">DESCRIPTION</div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {proposal.body}
                </ReactMarkdown>
              </div>
            </div>
          </section>
          {/* ========================= grantsDAO Introduction End ========================= */}
          {/* ========================= Blue Banner Start ========================= */}
          <div className="container-fluid synth-tab-styling">
            <div className="indi-grants-h-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="synth-tabs">
                      <div className="h4-grants-summary-h">SUMMARY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========================= Blue Banner End ========================= */}
          {/* ========================= grantsDAO Info Summary Start ========================= */}
          <section className="grants-info-summary">
            <div className="row grants-descr-wrapper grants-info-summary-wrapper padding-bottom">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="info-left col-md-2">Strategies</div>
                          <div className="info-right col-md-4">Icon</div>
                          <div className="info-left col-md-2">Start Date</div>
                          <div className="info-right col-md-4">
                            <Moment
                              unix
                              date={proposal.start}
                              format="D MMM YYYY"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="info-left col-md-2">Author</div>
                          <div className="info-right col-md-4">
                            {truncateAddress(proposal.author || "")}
                          </div>
                          <div className="info-left col-md-2">End Date</div>
                          <div className="info-right col-md-4">
                            <Moment
                              unix
                              date={proposal.end}
                              format="D MMM YYYY"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="info-left col-md-2">IPFS</div>
                          <div className="info-right col-md-4">
                            {truncateAddress(proposal.ipfs || "")}
                          </div>
                          <div className="info-left col-md-2">Snapshot</div>
                          <div className="info-right col-md-4">
                            {proposal.snapshot}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-3">
                    <div className="indi-btn-wrapper">
                      <div className="utility-btn">
                        <div className="voting-wrapper">
                          <div
                            className={`vertical-align grants-${
                              proposal.state === "active" ? "yes" : "applied"
                            }`}
                          >
                            {getGrantStatus(proposal.state, yesVotes)}
                          </div>
                        </div>
                      </div>
                      {/* Cancel grant is not implemented */}
                      {/* <div className="utility-btn">
                        <a href="#">
                          <button
                            className="vertical-align grants-cancel wow fadeInUp animated"
                            data-wow-delay=".6s"
                            style={{
                              visibility: "visible",
                              animationDelay: "0.6s",
                              animationName: "fadeInUp",
                            }}
                          >
                            CANCEL GRANT
                          </button>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================= grantsDAO Info Summary End ========================= */}
          {/* ========================= Yes No Votes Start ========================= */}
          <div className="container-fluid synth-tab-styling">
            <div className="indi-grants-h-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4 synth-tabs">
                        <span className="candidates-h">YES VOTES</span>{" "}
                        <span className="votes-amount">{yesVotes}/5</span>
                      </div>
                      <div className="col-md-4 synth-tabs">
                        <span className="candidates-h">NO VOTES</span>
                        <span className="votes-amount">{noVotes}/5</span>
                      </div>
                      <div className="col-md-1"></div>
                      <div className="vertical-align align-center col-md-3 col-sm-12">
                        <div className="indi-amount-wrapper">
                          <div className="grants-indi-amount">0 SNX</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========================= Yes No Votes End ========================= */}
          {/* ========================= Voting Info Start========================= */}
          <section className="candidates-info anchor" id="candidates-info">
            {/* ========================= Tab Data Headings========================= */}
            <div className="container">
              <div className="heading-wrapper max-width padding-15">
                <div className="row">
                  <div className="col-md-6 col-sm-12 active-tab-header">
                    VOTES
                  </div>
                  <div className="data-header align-center col-md-3 col-sm-12">
                    NAME{" "}
                    <span className="synth-up-arrow">
                      <img
                        alt="Arrow"
                        className="custom-icons"
                        src="/img/grants/down-arrow.svg"
                      />
                    </span>
                  </div>
                  <div className="data-header align-center col-md-3 col-sm-12">
                    VOTE{" "}
                    <span className="synth-up-arrow">
                      <img
                        alt="Arrow"
                        className="custom-icons"
                        src="/img/grants/down-arrow.svg"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* ========================= Tab Data Headings End========================= */}
            {/* ========================= Tabs All Data Start - Repeat these items...========================= */}
            <div className="container">
              <div className="gi-input-wrapper max-width">
                {votes && <Votes votes={votes} />}
              </div>
            </div>
            {/* ========================= Tabs Data End========================= */}
            {/* ========================= Candidates Info End========================= */}
            {/* ========================= Divider Start ========================= */}
            <div className="container">
              <div className="row max-width-grant-divider">
                <div style={{ height: 20 }}></div>
                <div className="col-md-12">
                  <div className="grants-end"></div>
                </div>
              </div>
            </div>
            {/* ========================= Divider End ========================= */}
            {/* ========================= grantsDAO Data End========================= */}
            {/* ========================= Grants Section End ========================= */}
            {/* ========================= Pager Start ========================= */}
            <div className="container">
              <div className="row grants-pager-wrapper">
                <div className="col-md-12">
                  <ul className="pager">
                    <li className="previous">
                      <Link href="/grants">
                        <a className="grants-pager-link">
                          <span className="synth-up-arrow">
                            <img
                              alt="Arrow"
                              className="pager-icons"
                              src="/img/grants/gdao-previous.svg"
                            />
                          </span>
                          BACK TO GRANTS
                        </a>
                      </Link>
                    </li>
                    <li className="next">
                      <Link href="/grants">
                        <a className="grants-pager-link">
                          NEXT GRANT
                          <span className="synth-up-arrow">
                            <img
                              alt="Arrow"
                              className="pager-icons"
                              src="/img/grants/gdao-next.svg"
                            />
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ========================= Pager End ========================= */}

        <Footer />
      </main>
    </>
  );
}
