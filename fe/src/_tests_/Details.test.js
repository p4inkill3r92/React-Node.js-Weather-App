import React, { Component, createContext } from "react";
import Enzyme, { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Details from "../components/pages/Details/Details";
import LocationProvider from "../contexts/LocationContext";
Enzyme.configure({ adapter: new Adapter() });

describe("Details", () => {
  let context = {
    locations: [
      {
        id: "ade628b5-fa95-4cbd-a2eb-5ab7b4d5a1fb",
        lat: -14.1,
        lon: -46.630001,
        name: "AAAA",
        weather: {
          forecast: [{}],

          today: {
            icon: "dg",
            dayOfWeek: "fgg",
            temperatureMin: 5,
            temperatureMax: 30,
            imgSrc: "/fggg",
            precipProbability: 2,
            windSpeed: 5
          }
        }
      }
    ],
    setActive: jest.fn(),
    updateLocations: jest.fn(),
    activaLocation: "",
    removeLocation: jest.fn(),
    loading: false
  };
  it("Should render correctly", () => {
    const wrapperD = mount(
      <LocationProvider>
        <Details />
      </LocationProvider>
    );
    expect(wrapperD.children().exists()).toBe(true);
  });
});
