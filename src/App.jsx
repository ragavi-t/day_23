import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheck, FaTimes } from "react-icons/fa";

function App() {
  const data = [
    {
      plan: "FREE",
      price: "$0",
      duration: "/month",
      users: "Single User",
      storage: "5GB Storage",
      public_projects: "Unlimited Public Projects",
      access: "Community Access",
      private_projects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domine: "Free Subdomain",
      report: "Monthly Status Reports",
      a: true,
    },
    {
      plan: "PLUS",
      price: "$9",
      duration: "/month",
      users: "5 Users",
      storage: "50GB Storage",
      public_projects: "Unlimited Public Projects",
      access: "Community Access",
      private_projects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domine: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      plan: "PRO",
      price: "$49",
      duration: "/month",
      users: "Unlimited Users",
      storage: "150GB Storage",
      public_projects: "Unlimited Public Projects",
      access: "Community Access",
      private_projects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domine: "Free Subdomain",
      report: "Monthly Status Reports",
    },
  ];

  return (
    <div className="App">
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {data.map((ele) => (
              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                      {ele.plan}
                    </h5>
                    <h6 class="card-price text-center">
                      {ele.price}
                      <span class="period">{ele.duration}</span>
                    </h6>
                    <hr />
                    <ul>
                      <li>
                        <span class="availability">
                          <FaCheck />
                        </span>
                        {ele.users}
                      </li>
                      <li>
                        <span class="availability">
                          <FaCheck />
                        </span>
                        {ele.storage}
                      </li>
                      <li>
                        <span class="availability">
                          <FaCheck />
                        </span>
                        {ele.public_projects}
                      </li>
                      <li>
                        <span class="availability">
                          <FaCheck />
                        </span>
                        {ele.access}
                      </li>
                      <li class={ele.plan != "FREE" ? "" : "text-muted"}>
                        <span class="availability">
                          {ele.plan != "FREE" ? <FaCheck /> : <FaTimes />}
                        </span>
                        {ele.private_projects}
                      </li>
                      <li class={ele.plan != "FREE" ? "" : "text-muted"}>
                        <span class="availability">
                          {ele.plan != "FREE" ? <FaCheck /> : <FaTimes />}
                        </span>

                        {ele.support}
                      </li>
                      <li class={ele.plan != "FREE" ? "" : "text-muted"}>
                        <span class="availability">
                          {ele.plan != "FREE" ? <FaCheck /> : <FaTimes />}
                        </span>

                        {ele.plan != "FREE" && ele.plan != "PLUS"
                            ?"Unlimited "+ele.domine:ele.domine}
                      </li>
                      <li
                        class={
                          ele.plan != "FREE" && ele.plan != "PLUS"
                            ? ""
                            : "text-muted"
                        }
                      >
                        <span class="availability">
                          {ele.plan != "FREE" && ele.plan != "PLUS" ? (
                            <FaCheck />
                          ) : (
                            <FaTimes />
                          )}
                        </span>
                        {ele.report}
                      </li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
