// app/utils/ReportUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    oscard = function(argFoo) { // Original name: canReportUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 66; continue _fun00001 }
 9:
            tangon = zuuluu.id;
            report = _closure1_slot3;
            michal = report.getCurrentUser;
            michal = michal.bind(report)();
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 64; continue _fun00001 }
 37:
            michal = michal.id;
            michal = michal !== tangon;
            if(!michal) { _fun00002_ip = 61; continue _fun00001 }
 49:
            tangon = zuuluu.system;
            zuuluu = true;
            michal = zuuluu !== tangon;
 61:
            entity = michal;
 64:
            return entity;
 66:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot6 = oscard;
    report = function(argFoo) { // Original name: canReportMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00004_ip = 32; continue _fun00003 }
 12:
            tangon = _closure1_slot6;
            zuuluu = michal.author;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 32:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tangon = function(argFoo) { // Original name: canReportAndDeleteInChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            zuuluu = _closure1_slot0;
            entity = zuuluu.getChannel;
            report = entity.bind(zuuluu)(option);
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 151; continue _fun00005 }
 29:
            tangon = report.type;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.DM;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 147; continue _fun00005 }
 48:
            tangon = report.type;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.GROUP_DM;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 147; continue _fun00005 }
 67:
            golfie = _closure1_slot2;
            oscard = golfie.canWithPartialContext;
            zuuluu = _closure1_slot5;
            tangon = zuuluu.MANAGE_MESSAGES;
            zuuluu = {};
            zuuluu['channelId'] = option;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            if(zuuluu) { _fun00006_ip = 106; continue _fun00005 }
 102:
            zuuluu = false;
            return zuuluu;
 106:
            tangon = _closure1_slot1;
            zuuluu = tangon.getMemberCount;
            michal = report.getGuildId;
            michal = michal.bind(report)();
            zuuluu = zuuluu.bind(tangon)(michal);
            entity = entity != zuuluu;
            if(!entity) { _fun00006_ip = 145; continue _fun00005 }
 138:
            michal = 50;
            entity = zuuluu >= michal;
 145:
            return entity;
 147:
            entity = true;
            return entity;
 151:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot0 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot1 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.ChannelTypes;
    var _closure1_slot4 = offset;
    golfie = golfie.Permissions;
    var _closure1_slot5 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/ReportUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['canReportUser'] = oscard;
    zuuluu['canReportMessage'] = report;
    zuuluu['canReportAndDeleteInChannel'] = tangon;
    michal = function(argFoo) { // Original name: canDeleteAndReportMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00008_ip = 26; continue _fun00007 }
 12:
            tangon = _closure1_slot7;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 26:
            if(!entity) { _fun00008_ip = 53; continue _fun00007 }
 29:
            tangon = _closure1_slot8;
            michal = zuuluu.getChannelId;
            zuuluu = michal.bind(zuuluu)();
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 53:
            return entity;
        }
    };
    zuuluu['canDeleteAndReportMessage'] = michal;
    return entity;
})();