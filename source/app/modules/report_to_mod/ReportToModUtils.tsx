// app/modules/report_to_mod/ReportToModUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: isModeratorReportPostChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 136; continue _fun00001 }
 12:
            report = _closure1_slot4;
            tangon = report.getGuild;
            zuuluu = oscard.guild_id;
            golfie = tangon.bind(report)(zuuluu);
            tangon = entity == golfie;
            zuuluu = undefined;
            if(tangon) { _fun00002_ip = 53; continue _fun00001 }
 43:
            tangon = golfie.getModeratorReportChannelId;
            zuuluu = tangon.bind(golfie)();
 53:
            tangon = oscard.id;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 132; continue _fun00001 }
 62:
            golfie = entity == oscard;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 77; continue _fun00001 }
 71:
            tangon = oscard.parent_id;
 77:
            if(!(entity != tangon)) { _fun00002_ip = 128; continue _fun00001 }
 81:
            tangon = _closure1_slot3;
            michal = tangon.getChannel;
            golfie = entity == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 105; continue _fun00001 }
 99:
            report = oscard.parent_id;
 105:
            michal = michal.bind(tangon)(report);
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 126; continue _fun00001 }
 117:
            michal = michal.id;
            entity = michal === zuuluu;
 126:
            return entity;
 128:
            entity = false;
            return entity;
 132:
            entity = true;
            return entity;
 136:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot7 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ReportToModPermissions;
    var _closure1_slot6 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/report_to_mod/ReportToModUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: canReportMessageToMods
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.canReportUser;
            zuuluu = entity.author;
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00004_ip = 52; continue _fun00003 }
 48:
            zuuluu = false;
            return zuuluu;
 52:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            entity = entity.channel_id;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00004_ip = 133; continue _fun00003 }
 77:
            tangon = _closure1_slot4;
            michal = tangon.getGuild;
            entity = entity.guild_id;
            tangon = michal.bind(tangon)(entity);
            if(!(zuuluu != tangon)) { _fun00004_ip = 129; continue _fun00003 }
 100:
            entity = tangon.getModeratorReportingEnabled;
            entity = entity.bind(tangon)();
            michal = tangon.getModeratorReportChannelId;
            michal = michal.bind(tangon)();
            if(!entity) { _fun00004_ip = 127; continue _fun00003 }
 123:
            entity = zuuluu != michal;
 127:
            return entity;
 129:
            entity = false;
            return entity;
 133:
            entity = false;
            return entity;
        }
    };
    zuuluu['canReportMessageToMods'] = report;
    report = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = arguments[1];
            golfie = undefined;
            if(!(report === golfie)) { _fun00006_ip = 35; continue _fun00005 }
 9:
            zuuluu = _closure1_slot4;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = _closure1_slot5;
            entity[1] = michal;
            report = entity;
 35:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            entity = tangon[entity];
            tangon = zuuluu.bind(golfie)(entity);
            zuuluu = tangon.getContextForPermission;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity, report);
            tangon = null;
            if(!(tangon != entity)) { _fun00006_ip = 213; continue _fun00005 }
 82:
            verify = entity.user;
            option = entity.guild;
            zuuluu = tangon == option;
            if(zuuluu) { _fun00006_ip = 112; continue _fun00005 }
 99:
            entity = option.getModeratorReportingEnabled;
            entity = entity.bind(option)();
            zuuluu = !entity;
 112:
            if(zuuluu) { _fun00006_ip = 129; continue _fun00005 }
 115:
            entity = option.getModeratorReportChannelId;
            entity = entity.bind(option)();
            zuuluu = tangon == entity;
 129:
            entity = !zuuluu;
            if(zuuluu) { _fun00006_ip = 211; continue _fun00005 }
 135:
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 6;
            zuuluu = offset[zuuluu];
            report = oscard.bind(golfie)(zuuluu);
            tangon = report.hasAny;
            zuuluu = 7;
            zuuluu = offset[zuuluu];
            golfie = oscard.bind(golfie)(zuuluu);
            oscard = golfie.computePermissions;
            zuuluu = {};
            zuuluu['user'] = verify;
            zuuluu['context'] = option;
            option = false;
            zuuluu['checkElevated'] = option;
            zuuluu = oscard.bind(golfie)(zuuluu);
            michal = _closure1_slot6;
            entity = tangon.bind(report)(zuuluu, michal);
 211:
            return entity;
 213:
            entity = false;
            return entity;
        }
    };
    zuuluu['canAccessReportsChannel'] = report;
    tangon = function(argFoo) { // Original name: isModeratorReportPostChannelId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00008_ip = 40; continue _fun00007 }
 29:
            zuuluu = _closure1_slot7;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 40:
            return entity;
        }
    };
    zuuluu['isModeratorReportPostChannelId'] = tangon;
    zuuluu['isModeratorReportPostChannel'] = michal;
    return entity;
})();