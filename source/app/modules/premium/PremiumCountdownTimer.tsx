// app/modules/premium/PremiumCountdownTimer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: formatCountdownNumerals
        tangon = argFoo;
        zuuluu = tangon.toLocaleString;
        entity = _closure1_slot3;
        michal = entity.locale;
        entity = {'minimumIntegerDigits': 2, 'useGrouping': false};
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot4 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/PremiumCountdownTimer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PremiumCountdownTimer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.endDate;
            michal = global;
            zuuluu = michal.Date;
            entity = zuuluu.now;
            tangon = entity.bind(zuuluu)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.diffAsUnits;
            entity = entity.bind(zuuluu)(tangon, oscard);
            zuuluu = oscard.getTime;
            zuuluu = zuuluu.bind(oscard)();
            tangon = tangon > zuuluu;
            entity = entity.days;
            option = 0;
            entity = entity > option;
            zuuluu = 1000;
            if(!entity) { _fun00002_ip = 104; continue _fun00001 }
 98:
            zuuluu = 3600000;
 104:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 4;
            entity = offset[entity];
            entity = verify.bind(report)(entity);
            result = undefined;
            output = oscard;
            sizing = zuuluu;
            kiloes = undefined;
            backup = tangon;
            yankee = result[entity](output, sizing, kiloes, backup, foxtra);
            entity = null;
            if(tangon) { _fun00002_ip = 408; continue _fun00001 }
 149:
            tangon = michal.Object;
            michal = tangon.values;
            oscard = michal.bind(tangon)(yankee);
            tangon = oscard.every;
            michal = function(argFoo) {
                michal = 0;
                entity = argFoo;
                entity = michal === entity;
                return entity;
            };
            michal = tangon.bind(oscard)(michal);
            entity = null;
            if(michal) { _fun00002_ip = 408; continue _fun00001 }
 193:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = yankee.days;
            if(!(!(oscard > option))) { _fun00002_ip = 327; continue _fun00001 }
 213:
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 5;
            verify = romeon[oscard];
            verify = option.bind(report)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            oscard = romeon[oscard];
            oscard = option.bind(report)(oscard);
            oscard = oscard.t;
            option = oscard.3MT4MT;
            oscard = {};
            foxtra = _closure1_slot6;
            romeon = yankee.hours;
            romeon = foxtra.bind(report)(romeon);
            oscard['hours'] = romeon;
            romeon = yankee.minutes;
            romeon = foxtra.bind(report)(romeon);
            oscard['minutes'] = romeon;
            romeon = yankee.seconds;
            romeon = foxtra.bind(report)(romeon);
            oscard['seconds'] = romeon;
            oscard = verify.bind(offset)(option, oscard);
            _fun00002_ip = 398; continue _fun00001;
 327:
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 5;
            verify = romeon[golfie];
            verify = option.bind(report)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            golfie = romeon[golfie];
            golfie = option.bind(report)(golfie);
            golfie = golfie.t;
            option = golfie.f0QaSU;
            golfie = {};
            yankee = yankee.days;
            golfie['days'] = yankee;
            oscard = verify.bind(offset)(option, golfie);
 398:
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 408:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();