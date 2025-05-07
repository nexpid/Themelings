// app/modules/report_to_mod/ReportToModUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: isModeratorReportChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 38; continue _fun00001 }
 12:
            michal = tangon.isModeratorReportChannel;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00002_ip = 35; continue _fun00001 }
 25:
            zuuluu = tangon.isForumChannel;
            michal = zuuluu.bind(tangon)();
 35:
            entity = michal;
 38:
            return entity;
        }
    };
    var _closure1_slot7 = oscard;
    tangon = function(argFoo) { // Original name: isModeratorReportPostChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00004_ip = 38; continue _fun00003 }
 12:
            michal = tangon.isModeratorReportChannel;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00004_ip = 35; continue _fun00003 }
 25:
            zuuluu = tangon.isForumPost;
            michal = zuuluu.bind(tangon)();
 35:
            entity = michal;
 38:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    michal = function(argFoo) { // Original name: isModeratorReportOrPostChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00006_ip = 41; continue _fun00005 }
 12:
            michal = _closure1_slot7;
            tangon = undefined;
            michal = michal.bind(tangon)(report);
            if(michal) { _fun00006_ip = 38; continue _fun00005 }
 29:
            zuuluu = _closure1_slot8;
            michal = zuuluu.bind(tangon)(report);
 38:
            entity = michal;
 41:
            return entity;
        }
    };
    var _closure1_slot9 = michal;
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
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ReportToModPermissions;
    var _closure1_slot6 = golfie;
    golfie = 8;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/report_to_mod/ReportToModUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo) { // Original name: canReportMessageToMods
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            if(zuuluu) { _fun00008_ip = 52; continue _fun00007 }
 48:
            zuuluu = false;
            return zuuluu;
 52:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            entity = entity.channel_id;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00008_ip = 133; continue _fun00007 }
 77:
            tangon = _closure1_slot4;
            michal = tangon.getGuild;
            entity = entity.guild_id;
            tangon = michal.bind(tangon)(entity);
            if(!(zuuluu != tangon)) { _fun00008_ip = 129; continue _fun00007 }
 100:
            entity = tangon.getModeratorReportingEnabled;
            entity = entity.bind(tangon)();
            michal = tangon.getModeratorReportChannelId;
            michal = michal.bind(tangon)();
            if(!entity) { _fun00008_ip = 127; continue _fun00007 }
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
    zuuluu['canReportMessageToMods'] = golfie;
    golfie = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = arguments[1];
            golfie = undefined;
            if(!(report === golfie)) { _fun00010_ip = 35; continue _fun00009 }
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
            if(!(tangon != entity)) { _fun00010_ip = 213; continue _fun00009 }
 82:
            verify = entity.user;
            option = entity.guild;
            zuuluu = tangon == option;
            if(zuuluu) { _fun00010_ip = 112; continue _fun00009 }
 99:
            entity = option.getModeratorReportingEnabled;
            entity = entity.bind(option)();
            zuuluu = !entity;
 112:
            if(zuuluu) { _fun00010_ip = 129; continue _fun00009 }
 115:
            entity = option.getModeratorReportChannelId;
            entity = entity.bind(option)();
            zuuluu = tangon == entity;
 129:
            entity = !zuuluu;
            if(zuuluu) { _fun00010_ip = 211; continue _fun00009 }
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
    zuuluu['canAccessReportsChannel'] = golfie;
    golfie = function(argFoo) { // Original name: isModeratorReportOrPostChannelId
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            entity = _closure1_slot9;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00012_ip = 43; continue _fun00011 }
 34:
            michal = _closure1_slot9;
            entity = michal.bind(zuuluu)(tangon);
 43:
            return entity;
        }
    };
    zuuluu['isModeratorReportOrPostChannelId'] = golfie;
    golfie = function(argFoo) { // Original name: isModeratorReportChannelId
        zuuluu = _closure1_slot7;
        tangon = _closure1_slot3;
        michal = tangon.getChannel;
        entity = argFoo;
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['isModeratorReportChannelId'] = golfie;
    zuuluu['isModeratorReportChannel'] = oscard;
    report = function(argFoo) { // Original name: isModeratorReportPostChannelId
        zuuluu = _closure1_slot8;
        tangon = _closure1_slot3;
        michal = tangon.getChannel;
        entity = argFoo;
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['isModeratorReportPostChannelId'] = report;
    zuuluu['isModeratorReportPostChannel'] = tangon;
    zuuluu['isModeratorReportOrPostChannel'] = michal;
    return entity;
})();