// app/uikit-native/GuildBadge.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: GuildBadge
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            golfie = oscard.guild;
            tangon = oscard.monocolored;
            report = undefined;
            if(!(tangon === report)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            tangon = false;
 22:
            option = oscard.size;
            if(!(option === report)) { _fun00002_ip = 50; continue _fun00001 }
 31:
            entity = _closure1_slot9;
            entity = entity.Sizes;
            option = entity.MEDIUM;
 50:
            zuuluu = {'guild': 0, 'monocolored': 0, 'size': 0};
            entity = null;
            romeon = zuuluu;
            yankee = null;
            michal = silentSetPrototypeOf(romeon, yankee);
            romeon = {};
            yankee = oscard;
            offset = zuuluu;
            oscard = copyDataProperties(romeon, yankee, offset);
            zuuluu = _closure1_slot8;
            golfie = zuuluu.bind(report)(golfie, tangon);
            zuuluu = entity == golfie;
            if(zuuluu) { _fun00002_ip = 163; continue _fun00001 }
 103:
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 8;
            michal = verify[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            romeon = michal;
            yankee = oscard;
            oscard = copyDataProperties(romeon, yankee);
            oscard = 'size';
            michal[oscard] = option;
            oscard = 'source';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 163:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    romeon = 0;
    verify = golfie[romeon];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(verify);
    yankee = 1;
    michal = golfie[yankee];
    michal = oscard.bind(entity)(michal);
    michal = michal.GuildFeatures;
    var _closure1_slot3 = michal;
    offset = 2;
    michal = golfie[offset];
    michal = oscard.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot4 = michal;
    verify = {};
    verify['PARTNERED'] = romeon;
    michal = 'PARTNERED';
    verify[romeon] = michal;
    verify['VERIFIED'] = yankee;
    michal = 'VERIFIED';
    verify[yankee] = michal;
    verify['PARTNERED_BLACK'] = offset;
    michal = 'PARTNERED_BLACK';
    verify[offset] = michal;
    yankee = 3;
    verify['VERIFIED_BLACK'] = yankee;
    michal = 'VERIFIED_BLACK';
    verify[yankee] = michal;
    offset = 4;
    verify['NONE'] = offset;
    michal = 'NONE';
    verify[offset] = michal;
    var _closure1_slot5 = verify;
    michal = {};
    romeon = verify.VERIFIED;
    yankee = golfie[yankee];
    yankee = option.bind(entity)(yankee);
    michal[romeon] = yankee;
    yankee = verify.PARTNERED;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    michal[yankee] = offset;
    yankee = verify.VERIFIED_BLACK;
    offset = 5;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    michal[yankee] = offset;
    yankee = verify.PARTNERED_BLACK;
    offset = 6;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    michal[yankee] = offset;
    offset = verify.NONE;
    verify = null;
    michal[offset] = verify;
    var _closure1_slot6 = michal;
    michal = function(argFoo, argBar) { // Original name: checkGuildForFeature
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            report = argBar;
            michal = null;
            entity = michal != zuuluu;
            if(!entity) { _fun00004_ip = 159; continue _fun00003 }
 18:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 7;
            tangon = oscard[tangon];
            oscard = undefined;
            golfie = golfie.bind(oscard)(tangon);
            tangon = golfie.isGuildRecord;
            tangon = tangon.bind(golfie)(zuuluu);
            if(tangon) { _fun00004_ip = 140; continue _fun00003 }
 57:
            tangon = global;
            verify = tangon.Array;
            option = verify.isArray;
            golfie = zuuluu.features;
            golfie = option.bind(verify)(golfie);
            if(golfie) { _fun00004_ip = 122; continue _fun00003 }
 84:
            tangon = tangon.Boolean;
            option = zuuluu.features;
            golfie = michal == option;
            michal = undefined;
            if(golfie) { _fun00004_ip = 115; continue _fun00003 }
 105:
            golfie = option.has;
            michal = golfie.bind(option)(report);
 115:
            michal = tangon.bind(oscard)(michal);
            _fun00004_ip = 138; continue _fun00003;
 122:
            oscard = zuuluu.features;
            tangon = oscard.includes;
            michal = tangon.bind(oscard)(report);
 138:
            _fun00004_ip = 156; continue _fun00003;
 140:
            tangon = zuuluu.features;
            zuuluu = tangon.has;
            michal = zuuluu.bind(tangon)(report);
 156:
            entity = michal;
 159:
            return entity;
        }
    };
    var _closure1_slot7 = michal;
    michal = function(argFoo, argBar) { // Original name: getGuildBadgeSource
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            zuuluu = argBar;
            michal = _closure1_slot5;
            michal = michal.NONE;
            report = _closure1_slot7;
            tangon = _closure1_slot3;
            tangon = tangon.VERIFIED;
            oscard = undefined;
            tangon = report.bind(oscard)(golfie, tangon);
            if(tangon) { _fun00006_ip = 93; continue _fun00005 }
 44:
            report = _closure1_slot7;
            tangon = _closure1_slot3;
            tangon = tangon.PARTNERED;
            tangon = report.bind(oscard)(golfie, tangon);
            if(!tangon) { _fun00006_ip = 117; continue _fun00005 }
 67:
            report = _closure1_slot5;
            if(zuuluu) { _fun00006_ip = 82; continue _fun00005 }
 74:
            tangon = report.PARTNERED;
            _fun00006_ip = 88; continue _fun00005;
 82:
            tangon = report.PARTNERED_BLACK;
 88:
            michal = tangon;
            _fun00006_ip = 117; continue _fun00005;
 93:
            tangon = _closure1_slot5;
            if(zuuluu) { _fun00006_ip = 108; continue _fun00005 }
 100:
            zuuluu = tangon.VERIFIED;
            _fun00006_ip = 114; continue _fun00005;
 108:
            zuuluu = tangon.VERIFIED_BLACK;
 114:
            michal = zuuluu;
 117:
            entity = _closure1_slot6;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot8 = michal;
    report = 8;
    report = golfie[report];
    report = option.bind(entity)(report);
    report = report.Sizes;
    tangon['Sizes'] = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'uikit-native/GuildBadge.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['getGuildBadgeSource'] = michal;
    return entity;
})();