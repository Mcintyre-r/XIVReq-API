
exports.seed = function(knex) {
  return knex('sets').truncate()
    .then(function () {
      return knex('requests').insert([
        {Class:'pld',wpnID:'13', shdID:'30',headID:'31',chestID:'32',handsID:'33',legsID:'34',feetID:'35',beltID:'36',earID:'73',neckID:'78',wristID:'83',ringID:'88'},
        {Class:'mnk',wpnID:'14',headID:'43',chestID:'44',handsID:'45',legsID:'46',feetID:'47',beltID:'48',earID:'74',neckID:'79',wristID:'84',ringID:'89'},
        {Class:'war',wpnID:'15',headID:'31',chestID:'32',handsID:'33',legsID:'34',feetID:'35',beltID:'36',earID:'73',neckID:'78',wristID:'83',ringID:'88'},
        {Class:'drg',wpnID:'16',headID:'37',chestID:'38',handsID:'39',legsID:'40',feetID:'41',beltID:'42',earID:'74',neckID:'79',wristID:'84',ringID:'89'},
        {Class:'brd',wpnID:'17',headID:'49',chestID:'50',handsID:'51',legsID:'52',feetID:'53',beltID:'54',earID:'75',neckID:'80',wristID:'85',ringID:'90'},
        {Class:'nin',wpnID:'18',headID:'55',chestID:'56',handsID:'57',legsID:'58',feetID:'59',beltID:'60',earID:'75',neckID:'80',wristID:'85',ringID:'90'},
        {Class:'drk',wpnID:'19',headID:'31',chestID:'32',handsID:'33',legsID:'34',feetID:'35',beltID:'36',earID:'73',neckID:'78',wristID:'83',ringID:'88'},
        {Class:'mch',wpnID:'20',headID:'49',chestID:'50',handsID:'51',legsID:'52',feetID:'53',beltID:'54',earID:'75',neckID:'80',wristID:'85',ringID:'90'},
        {Class:'whm',wpnID:'21',headID:'61',chestID:'62',handsID:'63',legsID:'64',feetID:'65',beltID:'66',earID:'76',neckID:'81',wristID:'86',ringID:'91'},
        {Class:'blm',wpnID:'22',headID:'67',chestID:'68',handsID:'69',legsID:'70',feetID:'71',beltID:'72',earID:'77',neckID:'82',wristID:'87',ringID:'92'},
        {Class:'smn',wpnID:'23',headID:'67',chestID:'68',handsID:'69',legsID:'70',feetID:'71',beltID:'72',earID:'77',neckID:'82',wristID:'87',ringID:'92'},
        {Class:'sch',wpnID:'24',headID:'61',chestID:'62',handsID:'63',legsID:'64',feetID:'65',beltID:'66',earID:'76',neckID:'81',wristID:'86',ringID:'91'},
        {Class:'ast',wpnID:'25',headID:'61',chestID:'62',handsID:'63',legsID:'64',feetID:'65',beltID:'66',earID:'76',neckID:'81',wristID:'86',ringID:'91'},
        {Class:'sam',wpnID:'26',headID:'43',chestID:'44',handsID:'45',legsID:'46',feetID:'47',beltID:'48',earID:'74',neckID:'79',wristID:'84',ringID:'89'},
        {Class:'rdm',wpnID:'27',headID:'67',chestID:'68',handsID:'69',legsID:'70',feetID:'71',beltID:'72',earID:'77',neckID:'82',wristID:'87',ringID:'92'},
        {Class:'gnb',wpnID:'28',headID:'31',chestID:'32',handsID:'33',legsID:'34',feetID:'35',beltID:'36',earID:'73',neckID:'78',wristID:'83',ringID:'88'},
        {Class:'dnc',wpnID:'29',headID:'49',chestID:'50',handsID:'51',legsID:'52',feetID:'53',beltID:'54',earID:'75',neckID:'80',wristID:'85',ringID:'90'},

      ]);
    });
};
