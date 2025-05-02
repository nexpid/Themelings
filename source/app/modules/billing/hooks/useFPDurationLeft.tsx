// app/modules/billing/hooks/useFPDurationLeft.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    michal = function(argFoo) { // Original name: roundFPCountdownUnits
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.days;
            tangon = 0;
            if(!(!(entity > tangon))) { _fun00002_ip = 206; continue _fun00001 }
 18:
            entity = zuuluu.hours;
            if(!(!(entity > tangon))) { _fun00002_ip = 127; continue _fun00001 }
 28:
            entity = zuuluu.minutes;
            if(!(!(entity > tangon))) { _fun00002_ip = 67; continue _fun00001 }
 38:
            michal = zuuluu.seconds;
            entity = zuuluu;
            if(!(michal > tangon)) { _fun00002_ip = 65; continue _fun00001 }
 51:
            entity = {'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 0};
 65:
            return entity;
 67:
            michal = zuuluu.minutes;
            entity = 45;
            entity = michal > entity;
            oscard = 0;
            if(!entity) { _fun00002_ip = 88; continue _fun00001 }
 85:
            oscard = 1;
 88:
            entity = {};
            entity['days'] = tangon;
            entity['hours'] = oscard;
            report = 1;
            michal = 0;
            if(!(report !== oscard)) { _fun00002_ip = 115; continue _fun00001 }
 109:
            michal = zuuluu.minutes;
 115:
            entity['minutes'] = michal;
            entity['seconds'] = tangon;
            return entity;
 127:
            michal = zuuluu.minutes;
            entity = 45;
            if(!(!(michal > entity))) { _fun00002_ip = 148; continue _fun00001 }
 140:
            michal = zuuluu.hours;
            _fun00002_ip = 161; continue _fun00001;
 148:
            report = zuuluu.hours;
            entity = 1;
            michal = report + entity;
 161:
            entity = 11;
            if(!(!(michal > entity))) { _fun00002_ip = 190; continue _fun00001 }
 168:
            entity = {'days': 0, 'hours': null, 'minutes': 0, 'seconds': 0};
            entity['hours'] = michal;
            _fun00002_ip = 204; continue _fun00001;
 190:
            entity = {'days': 1, 'hours': 0, 'minutes': 0, 'seconds': 0};
 204:
            return entity;
 206:
            entity = {'days': null, 'hours': 0, 'minutes': 0, 'seconds': 0};
            michal = zuuluu.hours;
            if(!(!(michal > tangon))) { _fun00002_ip = 238; continue _fun00001 }
 230:
            michal = zuuluu.days;
            _fun00002_ip = 251; continue _fun00001;
 238:
            tangon = zuuluu.days;
            zuuluu = 1;
            michal = tangon + zuuluu;
 251:
            entity['days'] = michal;
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    tangon = {};
    option = 0;
    tangon['SHORT_TIME_LEFT'] = option;
    entity = 'SHORT_TIME_LEFT';
    tangon[option] = entity;
    option = 1;
    tangon['LONG_TIME_LEFT'] = option;
    entity = 'LONG_TIME_LEFT';
    tangon[option] = entity;
    option = 2;
    tangon['ENDS_IN'] = option;
    entity = 'ENDS_IN';
    tangon[option] = entity;
    option = 3;
    tangon['SHORT_TIME'] = option;
    entity = 'SHORT_TIME';
    tangon[option] = entity;
    entity = 4;
    tangon['CREDITS_ENDS_IN'] = entity;
    option = 'CREDITS_ENDS_IN';
    tangon[entity] = option;
    var _closure1_slot3 = tangon;
    oscard = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/billing/hooks/useFPDurationLeft.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo, argBar) { // Original name: useFPDurationLeft
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            yankee = argBar;
            oscard = argFoo;
            tangon = undefined;
            zuuluu = undefined;
            report = undefined;
            entity = undefined;
            golfie = _closure1_slot3;
            golfie = golfie.SHORT_TIME_LEFT;
            if(!(golfie !== yankee)) { _fun00004_ip = 553; continue _fun00003 }
 34:
            golfie = _closure1_slot3;
            golfie = golfie.LONG_TIME_LEFT;
            if(!(golfie !== yankee)) { _fun00004_ip = 455; continue _fun00003 }
 51:
            golfie = _closure1_slot3;
            golfie = golfie.ENDS_IN;
            if(!(golfie !== yankee)) { _fun00004_ip = 354; continue _fun00003 }
 68:
            golfie = _closure1_slot3;
            golfie = golfie.CREDITS_ENDS_IN;
            if(!(golfie !== yankee)) { _fun00004_ip = 253; continue _fun00003 }
 85:
            golfie = _closure1_slot3;
            golfie = golfie.SHORT_TIME;
            if(!(golfie !== yankee)) { _fun00004_ip = 158; continue _fun00003 }
 99:
            golfie = global;
            verify = golfie.Error;
            golfie = golfie.HermesInternal;
            offset = golfie.concat;
            option = 'Unknown messageType (';
            golfie = ') when rendering time left';
            foxtra = offset.bind(option)(yankee, golfie);
            option = verify.prototype;
            option = Object.create(option, {constructor: {value: verify}});
            backup = option;
            golfie = new backup[verify](foxtra, romeon);
            golfie = golfie instanceof Object ? golfie : option;
            throw golfie;
 158:
            golfie = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 0;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.fYmir6;
            golfie['days'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.C3RO+v;
            golfie['hours'] = yankee;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.t;
            option = option.r77oHR;
            golfie['minutes'] = option;
            zuuluu = golfie;
            _fun00004_ip = 649; continue _fun00003;
 253:
            golfie = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 0;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.xQ3zuL;
            golfie['days'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.SFU7QE;
            golfie['hours'] = yankee;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.t;
            option = option.Y4FNdH;
            golfie['minutes'] = option;
            zuuluu = golfie;
            _fun00004_ip = 649; continue _fun00003;
 354:
            golfie = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 0;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.rLqNaW;
            golfie['days'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.d1LvCA;
            golfie['hours'] = yankee;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.t;
            option = option.Z2LX7O;
            golfie['minutes'] = option;
            zuuluu = golfie;
            _fun00004_ip = 649; continue _fun00003;
 455:
            golfie = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 0;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.UD5nn5;
            golfie['days'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.Hg8FeX;
            golfie['hours'] = yankee;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.t;
            option = option.XSbQZW;
            golfie['minutes'] = option;
            zuuluu = golfie;
            _fun00004_ip = 649; continue _fun00003;
 553:
            golfie = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 0;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee./wnvqK;
            golfie['days'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.Jsq0XF;
            golfie['hours'] = yankee;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.t;
            option = option.SBd+Bg;
            golfie['minutes'] = option;
            zuuluu = golfie;
 649:
            golfie = _closure1_slot4;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 1;
            option = offset[option];
            verify = verify.bind(tangon)(option);
            option = oscard;
            oscard = option.toDate;
            option = oscard.bind(option)();
            oscard = 60000;
            oscard = verify.bind(tangon)(option, oscard);
            report = golfie.bind(tangon)(oscard);
            entity = '';
 707: // try_start_0
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 2;
            oscard = option[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = golfie.unitsAsStrings;
            entity = oscard.bind(golfie)(report, zuuluu);
 739: // try_end0
            _fun00004_ip = 780; continue _fun00003;
 741: // catch_target0
            CatchBlockStart(arg_register=2);
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.captureMessage;
            michal = 'Error trying to format string for fractional nitro duration pill';
            michal = zuuluu.bind(tangon)(michal);
 780:
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['CountDownMessageTypes'] = tangon;
    zuuluu['roundFPCountdownUnits'] = michal;
    return entity;
})();