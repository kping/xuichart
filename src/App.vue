<template>
  <div id="app">

  </div>
</template>

<script>

export default {
  name: 'Examples',
  components: {
  },
  data() {
    const today = new Date()
    const month = (today.getMonth() + 1 <= 9 ? '0' : '') + String(today.getMonth() + 1)
    const periodDatesPrices = []

    window.vueHotelDatepicker = {
      priceSymbol: '',
      periodDates: [
        {
          startAt: '2021-07-01',
          endAt: '2021-08-01',
          minimumDuration: 4,
          periodType: 'nightly',
        },
        {
          startAt: '2021-08-01',
          endAt: '2021-09-05',
          minimumDuration: 2,
          periodType: 'weekly_by_saturday',
        },
        {
          startAt: '2021-09-05',
          endAt: '2021-10-04',
          minimumDuration: 4,
          periodType: 'nightly',
        },
        {
          startAt: '2021-10-04',
          endAt: '2021-11-29',
          minimumDuration: 1,
          periodType: 'weekly_by_sunday',
          price: 4000.0,
        },
        ...periodDatesPrices,
      ],
      bookings: [
        {
          id: '1726359',
          checkInDate: '2021-08-22',
          checkOutDate: '2021-08-29',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '1726360',
          checkInDate: '2021-08-15',
          checkOutDate: '2021-08-22',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '1726358',
          checkInDate: '2021-08-01',
          checkOutDate: '2021-08-15',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '1726357',
          checkInDate: '2021-09-01',
          checkOutDate: '2021-09-23',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '1726356',
          checkInDate: '2021-06-01',
          checkOutDate: '2021-06-18',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '181412',
          checkInDate: '2022-09-15',
          checkOutDate: '2022-10-15',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '181491',
          checkInDate: '2022-07-01',
          checkOutDate: '2022-08-31',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '178234',
          checkInDate: '2023-08-04',
          checkOutDate: '2023-08-25',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
        {
          id: '178235',
          checkInDate: '2023-07-01',
          checkOutDate: '2023-07-31',
          style: {
            backgroundColor: '#9DC1C9',
          },
        },
      ],
      checkIn: null,
      checkOut: null,
      minNights: 3,
      menu: false,
      currentWidth: window.innerWidth,
      boxShow: 0,
      language: 'en',
      languages: { pt, fr, en, es, it },
      alwaysVisible: false,
      firstDayOfWeek: 0,
      gridStyle: true,
      showSingleMonth: false,
      positionRight: false,
      singleDaySelection: false,
      showPrice: false,
      showYear: true,
      yearBeforeMonth: false,
      showMinNights: false,
      showContentSlot: false,
      showBookings: false,
      showLastDateAvailable: false,
      showPeriodDates: false,
      showStartingDate: false,
      startingDate: `${today.getFullYear()}-${month}-${today.getDate()}`,
      showEndingDate: false,
      endingDate: `${today.getFullYear()}-${month}-${today.getDate()}`,
    }

    return window.vueHotelDatepicker
  },
  computed: {
    dateFormat() {
      return 'DD/MM/YYYY'
    },
    lastDateAvailable() {
      return this.addYears(new Date(), 2)
    },
    i18n() {
      return this.languages[this.language] ? this.languages[this.language] : this.languages.en
    },
    startingDateValue: {
      get() {
        return this.showStartingDate ? `${this.startingDate} 00:00:00.00000` : null
      },
      set(date) {
        this.startingDate = date
      },
    },
    showStartingDateValue: {
      get() {
        return this.showStartingDate
      },
      set(show) {
        this.showStartingDate = show
      },
    },
    endingDateValue: {
      get() {
        return this.showEndingDate ? `${this.endingDate} 00:00:00.00000` : null
      },
      set(date) {
        this.endingDate = date
      },
    },
    showEndingDateValue: {
      get() {
        return this.showEndingDate
      },
      set(show) {
        this.showEndingDate = show
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  methods: {
    newData() {
      return {}
    },
    selectBox(box) {
      this.boxShow = -1
      this.checkIn = null
      this.checkOut = null
      this.boxShow = box
      this.toggleMenu()
    },
    toggleMenu() {
      this.menu = !this.menu
    },
    onResize() {
      this.currentWidth = window.innerWidth
    },
    bookingClicked(event, date, currentBooking) {
      /* eslint-disable-next-line */
      console.log('bookingClicked', event, date, currentBooking)
    },
    periodSelected(event, checkIn, checkOut) {
      /* eslint-disable-next-line */
      console.log('periodSelected', event, checkIn, checkOut)
    },
    handleCheckIncheckOutHalfDay(checkIncheckOutHalfDay) {
      /* eslint-disable-next-line */
      console.log('handleCheckIncheckOutHalfDay', checkIncheckOutHalfDay)
    },
    addYears(dt, n) {
      return new Date(dt.setFullYear(dt.getFullYear() + n))
    },
    validateDateBetweenTwoDates(fromDate, toDate, givenDate) {
      const getvalidDate = (d) => {
        return new Date(d)
      }

      return getvalidDate(givenDate) <= getvalidDate(toDate) && getvalidDate(givenDate) >= getvalidDate(fromDate)
    },
    dayClicked(date, formatDate, nextDisabledDate) {
      /* eslint-disable-next-line */
      console.log(date, formatDate, nextDisabledDate)
    },
    checkInChanged(newDate) {
      this.checkIn = newDate
    },
    checkOutChanged(newDate) {
      this.checkOut = newDate
    },
  },
}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
body {
  display: block;
  font-family: Roboto, 'Source Sans Pro', sans-serif;
  font-size: 16px;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}
h1 {
  background-color: #28ca9c;
  color: white;
  padding: 1em 0;
  margin: 0;
}
#app {
  text-align: center;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  /*
  @media (min-width: 1441px) {
    margin: 0 auto;
    max-width: 1180px;
    width: 1180px;
  }
  */

  .toggle-menu {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    flex: none;
    color: white;
    padding: 1em 0.5em 1em;
    img {
      width: 1.5em;
    }
  }
  @media (min-width: 1441px) {
    .toggle-menu {
      display: none;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    flex-grow: 1;
    max-width: 300px;
    text-align: left;
    max-height: 100%;
    overflow-y: hidden;
    @media (max-width: 1440px) {
      max-width: 100%;

      &.hidden {
        width: 0;
        max-width: 0;
        overflow: hidden;
        flex-shrink: 1;
      }
    }

    ul {
      padding: 0 0 2em 0;
      margin: 0 1em 0 0;
      font-size: 1.17rem;
      overflow: auto;
      @media (max-width: 1440px) {
        margin-left: calc(24px + 1em);
      }
      li {
        font-size: 1rem;
        padding: 0.25em 0.75em;
        margin: 0;
        text-align: left;
        cursor: pointer;
        list-style-type: none;
        border-bottom: 1px dashed rgba(128, 128, 128, 0.425);

        &:hover,
        &:active,
        &:focus {
          background-color: gray;
          color: white;
        }
        &.selected {
          background-color: #28ca9c;
          color: white;
          position: sticky;
          top: 0;
          bottom: -2em;
        }
      }
    }
  }

  .box-container {
    max-width: 100%;
    width: 100%;
    overflow: auto;
    @media (min-width: 1441px) {
      text-align: left;
    }
    .box {
      flex-grow: 1;
    }
    .box:first-child {
      flex-grow: 0;
    }
  }

  h3 {
    background-color: gray;
    color: white;
    padding: 1em 0 1em calc(1em + 24px);
    margin-top: 0;
    text-align: left;
  }
}
.vhd__datepicker__wrapper {
  max-width: 300px;
  &.vhd__datepicker__fullview {
    max-width: 90%;
  }
}
pre.code {
  background: black;
}
</style>
