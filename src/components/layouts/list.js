import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const pages = [
    { id: 1, name: 'Who We Are', route: 'aboutus/edit/who-we-are' },
    { id: 2, name: 'CSR', route: 'aboutus/edit/csr' },
    { id: 3, name: 'Values and Ethics', route: 'aboutus/edit/value-ethics' },
    { id: 4, name: 'Quality Certification', route: 'aboutus/edit/quality-certification' },
    { id: 5, name: 'Leadership', route: 'leadership' },
    { id: 6, name: 'Life At iLenSys', route: 'aboutus/edit/life-at-ilensys' },
  ];

  return (
    <section style={{margin: '60px 15px 0 260px',transition: '0.5s', backgroundColor: '#eaf0f7'}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 pt-3 pb-3">
                <h4 className="page-title">About Us</h4>
                </div>
                <div className="col-md-4 pt-3"></div>
            </div>
            <div className="card" style={{ backgroundColor: '#eaf0f7',border:'none'}}>
                <div className="card-body pt-0 pb-0">
                <div className="row">
                    <div className="col-md-12 p-0 my-auto">
                    <div className="table-responsive">
                        <table className="table table-bordered m-0">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Page Name</th>
                            <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pages.map((page) => (
                            <tr key={page.id}>
                                <td scope="row">{page.id}</td>
                                <td>{page.name}</td>
                                <td className="text-center">
                                <Link className="text-dark" to={`/${page.route}`}>
                                    <i className="material-icons">mode_edit</i>
                                </Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </section>
    
  );
};

export default AboutUs;
