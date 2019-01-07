var paragraph =
  '20181228153310,IN,RQ,,engt6-20181228153310-3021fa9c-7781-457b-855a-731c00e2845b,FLT_KND=ONEWAY,DEP_CD1=TYO,DEP_YMD1=20190405,ARR_CD1=LON,ADULT=1,CHILD=0,INFANT=0,SEAT_CLS=,<OTA_AirLowFareSearchRQ Version="4.1.0" ResponseType="GIR" xmlns="http://www.opentravel.org/OTA/2003/05" ResponseVersion="4.1.0" AvailableFlightsOnly="true"><POS><Source PseudoCityCode="8IC6"><RequestorID ID="1" Type="1"><CompanyName Code="TN">TN</CompanyName></RequestorID></Source></POS><OriginDestinationInformation RPH="1"><DepartureDateTime>2019-04-05T12:00:00</DepartureDateTime><OriginLocation LocationCode="TYO"/><DestinationLocation LocationCode="LON"/><TPA_Extensions></TPA_Extensions></OriginDestinationInformation><TravelPreferences ValidInterlineTicket="true"><TPA_Extensions><LongConnectTime Enable="true" /><XOFares Value="true" /></TPA_Extensions></TravelPreferences><TravelerInfoSummary><SeatsRequested>1</SeatsRequested><AirTravelerAvail><PassengerTypeQuantity Code="ADT" Quantity="1"/></AirTravelerAvail><PriceRequestInformation><TPA_Extensions><PublicFare Ind="true"/><Priority><Price Priority="1"/><DirectFlights Priority="2"/><Time Priority="3"/><Vendor Priority="4"/></Priority><Indicators><RetainFare Ind="true"/><MinMaxStay Ind="true"/><RefundPenalty Ind="true"/><ResTicketing Ind="true"/></Indicators></TPA_Extensions></PriceRequestInformation></TravelerInfoSummary><TPA_Extensions><IntelliSellTransaction><RequestType Name="50ITINS"/><CompressResponse Value="true" /></IntelliSellTransaction></TPA_Extensions></OTA_AirLowFareSearchRQ>';
var regex = /.+?(?=<OTA_AirLowFareSearchRQ)(<OTA_AirLowFareSearchRQ.*)/;
//var paragraph = 'a "witch" and her "broom" is one';
//var regex = /".+?"/g
var found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
