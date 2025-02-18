// app/utils/NicknameUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    report = function(argFoo, argBar, argBaz) { // Original name: getNickname
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golfie = argBar;
            michal = argBaz;
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 107; continue _fun00001 }
 15:
            if(!(entity == report)) { _fun00002_ip = 81; continue _fun00001 }
 19:
            if(!(entity != golfie)) { _fun00002_ip = 57; continue _fun00001 }
 23:
            oscard = _closure1_slot3;
            tangon = oscard.getChannel;
            oscard = tangon.bind(oscard)(golfie);
            if(!(entity != oscard)) { _fun00002_ip = 57; continue _fun00001 }
 44:
            tangon = oscard.isPrivate;
            tangon = tangon.bind(oscard)();
            if(tangon) { _fun00002_ip = 59; continue _fun00001 }
 57:
            return entity;
 59:
            oscard = _closure1_slot5;
            tangon = oscard.getNickname;
            zuuluu = michal.id;
            zuuluu = tangon.bind(oscard)(zuuluu);
            return zuuluu;
 81:
            tangon = _closure1_slot4;
            zuuluu = tangon.getNick;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(report, michal);
            return michal;
 107:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getName
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argBaz;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00004_ip = 68; continue _fun00003 }
 9:
            golfie = _closure1_slot6;
            report = undefined;
            oscard = argFoo;
            entity = argBar;
            entity = golfie.bind(report)(oscard, entity, tangon);
            if(!(zuuluu == entity)) { _fun00004_ip = 66; continue _fun00003 }
 35:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getName;
            entity = michal.bind(zuuluu)(tangon);
 66:
            _fun00004_ip = 128; continue _fun00003;
 68:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.sKdZ6e;
            entity = zuuluu.bind(tangon)(michal);
 128:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: useName
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot4;
        michal = new Array(3);
        michal[0] = oscard;
        oscard = _closure1_slot3;
        michal[1] = oscard;
        report = _closure1_slot5;
        michal[2] = report;
        entity = function() {
            report = _closure1_slot7;
            tangon = _closure2_slot0;
            zuuluu = _closure2_slot1;
            michal = _closure2_slot2;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = {};
    oscard['getNickname'] = report;
    oscard['getName'] = tangon;
    oscard['useName'] = michal;
    golfie = 6;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/NicknameUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['getNickname'] = report;
    zuuluu['getName'] = tangon;
    zuuluu['useName'] = michal;
    return entity;
})();