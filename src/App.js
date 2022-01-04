import './App.css';
import SearchBox from './components/SearchBox/SearchBox';

const details = [

  {
    name: 'urn:ot.rest.perms:availability',
    label: 'urn:ot.rest.perms:availability.definition',
  },
 
  {
    name: 'urn:ot.rest.perms:directmessaging',
    label: 'urn:ot.rest.perms:directmessaging.definition',
  },
  {
    name: 'urn:ot.rest.perms:foh',
    label: 'urn:ot.rest.perms:foh.definition',
  },
  {
    name: 'urn:ot.rest.perms:partnerservices',
    label: 'urn:ot.rest.perms:partnerservices.definition',
  },
  {
    name: 'urn:ot.rest.perms:marketing',
    label: 'urn:ot.rest.perms:marketing.definition',
  },

  {
    name: 'urn:ot.rest.perms:guestComm',

    label: 'urn:ot.rest.perms:guestComm.definition',
  },

  {
    name: 'urn:ot.rest.perms:venga',

    label: 'urn:ot.rest.perms:venga.definition',
  },

  {
    name: 'urn:ot.rest.perms:reporting.exporting',

    label: 'urn:ot.rest.perms:reporting.exporting.definition',
  },

  {
    name: 'urn:ot.rest.perms:reporting',

    label: 'urn:ot.rest.perms:reporting.definition',
  },

  {
    name: 'urn:ot.rest.perms:restprofile',

    label: 'urn:ot.rest.perms:restprofile.definition',
  },

  {
    name: 'urn:ot.rest.perms:restaurantsettings',

    label: 'urn:ot.rest.perms:restaurantsettings.definition',
  },

  { name: 'urn:ot.rest.perms:reviews', label: 'urn:ot.rest.perms:reviews.definition' },

  {
    name: 'urn:ot.rest.perms:pickupsettings',

    label: 'urn:ot.rest.perms:pickupsettings.definition',
  },
  {
    name: 'urn:ot.rest.perms:billing',
    label: 'urn:ot.rest.perms:billing.definition',
  },
  {
    name: 'urn:ot.rest.perms:accounts',
    label: 'urn:ot.rest.perms:accounts.definition',
  },
];
function App() {


  const  SortArray =(x, y)=> x.label.localeCompare(y.label);

  const sortArray = details.sort(SortArray);
  console.log(sortArray);

  return (
    <div className="App">
      {/* <SearchBox/> */}
    </div>
  );
}

export default App;
