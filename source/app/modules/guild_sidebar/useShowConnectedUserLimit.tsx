// app/modules/guild_sidebar/useShowConnectedUserLimit.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    entity = function(argFoo) { // Original name: formatNumber
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = arguments[1];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 18; continue _fun00001 }
 12:
            zuuluu = 1000;
 18:
            if(!(!(tangon >= zuuluu))) { _fun00002_ip = 58; continue _fun00001 }
 22:
            michal = tangon.toFixed;
            entity = 0;
            oscard = michal.bind(tangon)(entity);
            report = oscard.padStart;
            michal = 2;
            entity = '0';
            entity = report.bind(oscard)(michal, entity);
            _fun00002_ip = 124; continue _fun00001;
 58:
            michal = global;
            golfie = michal.Math;
            oscard = golfie.floor;
            report = tangon / zuuluu;
            oscard = oscard.bind(golfie)(report);
            golfie = tangon % zuuluu;
            report = '';
            zuuluu = 0;
            tangon = report;
            if(!(golfie != zuuluu)) { _fun00002_ip = 102; continue _fun00001 }
 98:
            tangon = '+';
 102:
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'k';
            entity = zuuluu.bind(report)(oscard, michal, tangon);
 124:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    tangon = function(argFoo) { // Original name: useConnectedUserLimit
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            report = entity.video;
            tangon = entity.considerMaxStageVoiceUserLimit;
            oscard = undefined;
            if(!(tangon === oscard)) { _fun00004_ip = 30; continue _fun00003 }
 28:
            tangon = true;
 30:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            entity = 1;
            entity = option[entity];
            entity = golfie.bind(oscard)(entity);
            entity = entity.bind(oscard)(michal);
            verify = entity.limit;
            oscard = michal.userLimit;
            entity = 0;
            oscard = oscard > entity;
            option = -1;
            if(!oscard) { _fun00004_ip = 91; continue _fun00003 }
 85:
            option = michal.userLimit;
 91:
            if(!report) { _fun00004_ip = 98; continue _fun00003 }
 94:
            report = verify > entity;
 98:
            michal = option;
            if(!report) { _fun00004_ip = 133; continue _fun00003 }
 104:
            report = verify;
            if(!(option > entity)) { _fun00004_ip = 130; continue _fun00003 }
 111:
            oscard = global;
            golfie = oscard.Math;
            oscard = golfie.min;
            report = oscard.bind(golfie)(option, verify);
 130:
            michal = report;
 133:
            if(!tangon) { _fun00004_ip = 146; continue _fun00003 }
 136:
            zuuluu = _closure1_slot2;
            entity = 0;
            if(!(michal !== zuuluu)) { _fun00004_ip = 149; continue _fun00003 }
 146:
            entity = michal;
 149:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_sidebar/useShowConnectedUserLimit.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useShowConnectedUserLimit
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            oscard = michal.channel;
            zuuluu = michal.locked;
            entity = michal.video;
            michal = michal.selected;
            report = _closure1_slot4;
            tangon = {};
            tangon['channel'] = oscard;
            tangon['video'] = entity;
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            entity = 0;
            entity = tangon > entity;
            if(!entity) { _fun00006_ip = 63; continue _fun00005 }
 60:
            entity = !zuuluu;
 63:
            if(!entity) { _fun00006_ip = 69; continue _fun00005 }
 66:
            entity = !michal;
 69:
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['useConnectedUserLimit'] = tangon;
    michal = function(argFoo) { // Original name: useConnectedUserLimitFormatted
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.channel;
            tangon = entity.video;
            oscard = entity.userCount;
            michal = _closure1_slot4;
            entity = {};
            entity['channel'] = report;
            entity['video'] = tangon;
            report = undefined;
            tangon = michal.bind(report)(entity);
            entity = 0;
            golfie = tangon <= entity;
            michal = null;
            entity = null;
            if(golfie) { _fun00008_ip = 118; continue _fun00007 }
 58:
            if(!(michal == oscard)) { _fun00008_ip = 73; continue _fun00007 }
 62:
            michal = _closure1_slot3;
            michal = michal.bind(report)(tangon);
            _fun00008_ip = 115; continue _fun00007;
 73:
            zuuluu = _closure1_slot3;
            golfie = zuuluu.bind(report)(oscard);
            oscard = zuuluu.bind(report)(tangon);
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            tangon = '';
            zuuluu = '/';
            michal = report.bind(tangon)(golfie, zuuluu, oscard);
 115:
            entity = michal;
 118:
            return entity;
        }
    };
    zuuluu['useConnectedUserLimitFormatted'] = michal;
    return entity;
})();