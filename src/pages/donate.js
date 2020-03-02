import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

export default () => {

    const _data = useStaticQuery(graphql`
    query DonateQuery{
        allPrismicDonate{
          nodes{
            data{
              title{
                text
                html
              },
              about_contributions{
                text,
                html
              },
              paypal{
                html,
                text
              },
              paypal_text{
                html,
                text
              },
                    recurrence,
              how_many_times,
              donation_amount,
              wire_transfer{
                html,
                text
              },
              wire_transfer {
                html
                text
              },
              wire_transfer_text{
                html,
                text
              }
            }
          }
        }
      }
    `)

    let data = _data.allPrismicDonate.nodes[0].data
    return (
        <Layout>
            <h1>{data.title.text}</h1>
            <p>{data.about_contributions.text}</p>

            <h3>{data.paypal.text}</h3>
            <p>{data.paypal_text.text}</p>
            {/* <h3>{data.paypal_link.text}</h3> */}
            {/* {'There is no "paypal_link" link currently in Prismic'} */}
            {/* <select id='recurrence'>
                <option>
                    {data.recurrence.text}
                </option>
            </select>
            <select id='how_many_times'>
                <option value={data.how_many_times.text}>
                    {data.how_many_times.text}
                </option>
            </select>
            {data.donation_amount} */}
            <h3>{data.wire_transfer.text}</h3>
            <p>{data.wire_transfer_text.text}</p>
        </Layout>
    );
};