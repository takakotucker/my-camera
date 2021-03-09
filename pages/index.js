import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import styles from '../styles/Home.module.css'


export default function Home({ cameras }) {
  return (
    <div className={styles.container}>
    <Head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
     <meta charset="utf-8" />
    <title>Security cameras Utrecht</title>
      <link rel="icon" type="image/x-icon" href="video-camera-icon.png" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js" />
    </Head>
    <h1>Security cameras Utrecht</h1>
      {cameras.map(item => {
            return (
               <div>
                <div>{ item.camera }</div>
                <div>{ item.latitude }</div>
                <div>{ item.longitude }</div>
                </div>
            );
        })}

      <div id="map"></div>
      <div id="source">
        source:
        <a href="https://data.overheid.nl/dataset/camera-s">https://data.overheid.nl/dataset/camera-s</a>
      </div>
      <main>
        <table id="cameraTableContainer">
          <tbody>
            <tr>
              <td>
                <table id="column3">
                  <thead>
                    <tr>
                      <th colspan="4">Cameras 3</th>
                    </tr>
                    <tr>
                      <th>Number</th>
                      <th>Name</th>
                      <th>Latitude</th>
                      <th>Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </td>
              <td>
                <table id="column5">
                  <thead>
                    <tr>
                      <th colspan="4">Cameras 5</th>
                    </tr>
                    <tr>
                      <th>Number</th>
                      <th>Name</th>
                      <th>Latitude</th>
                      <th>Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </td>
              <td>
                <table id="column15">
                  <thead>
                    <tr>
                      <th colspan="4">Cameras 3 &amp; 5</th>
                    </tr>
                    <tr>
                      <th>Number</th>
                      <th>Name</th>
                      <th>Latitude</th>
                      <th>Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </td>
              <td>
                <table id="columnOther">
                  <thead>
                    <tr>
                      <th colspan="4">Cameras Overig</th>
                    </tr>
                    <tr>
                      <th>Number</th>
                      <th>Name</th>
                      <th>Latitude</th>
                      <th>Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}


export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/camera',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query getCameraData {
        cameraData {
          camera
          latitude
          longitude
        }
      }
    `
  });

  return {
    props: {
      cameras: data.cameraData
    }
  }
}
