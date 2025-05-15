// app/modules/report_to_mod/ReportToModUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = offset;
    golfie = function(argFoo) { // Original name: isModeratorReportOrPostChannelId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot4;
            zuuluu = tangon.getChannel;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            entity = _closure1_slot11;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00002_ip = 43; continue _fun00001 }
 34:
            michal = _closure1_slot11;
            entity = michal.bind(zuuluu)(tangon);
 43:
            return entity;
        }
    };
    var _closure1_slot8 = golfie;
    oscard = function(argFoo) { // Original name: isModeratorReportChannel
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
            zuuluu = tangon.isForumChannel;
            michal = zuuluu.bind(tangon)();
 35:
            entity = michal;
 38:
            return entity;
        }
    };
    var _closure1_slot9 = oscard;
    report = function(argFoo) { // Original name: isModeratorReportPostChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00006_ip = 38; continue _fun00005 }
 12:
            michal = tangon.isModeratorReportChannel;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00006_ip = 35; continue _fun00005 }
 25:
            zuuluu = tangon.isForumPost;
            michal = zuuluu.bind(tangon)();
 35:
            entity = michal;
 38:
            return entity;
        }
    };
    var _closure1_slot10 = report;
    tangon = function(argFoo) { // Original name: isModeratorReportOrPostChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00008_ip = 41; continue _fun00007 }
 12:
            michal = _closure1_slot9;
            tangon = undefined;
            michal = michal.bind(tangon)(report);
            if(michal) { _fun00008_ip = 38; continue _fun00007 }
 29:
            zuuluu = _closure1_slot10;
            michal = zuuluu.bind(tangon)(report);
 38:
            entity = michal;
 41:
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    entity = global;
    foxtra = entity.Object;
    romeon = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, option);
    entity = 0;
    option = offset[entity];
    entity = undefined;
    option = yankee.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.ReportToModPermissions;
    var _closure1_slot7 = option;
    option = 11;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/report_to_mod/ReportToModUtils.tsx';
    option = verify.bind(offset)(option);
    option = function(argFoo) { // Original name: canReportMessageToMods
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 5;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.canReportUser;
            zuuluu = entity.author;
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00010_ip = 52; continue _fun00009 }
 48:
            zuuluu = false;
            return zuuluu;
 52:
            tangon = _closure1_slot4;
            zuuluu = tangon.getChannel;
            entity = entity.channel_id;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00010_ip = 133; continue _fun00009 }
 77:
            tangon = _closure1_slot5;
            michal = tangon.getGuild;
            entity = entity.guild_id;
            tangon = michal.bind(tangon)(entity);
            if(!(zuuluu != tangon)) { _fun00010_ip = 129; continue _fun00009 }
 100:
            entity = tangon.getModeratorReportingEnabled;
            entity = entity.bind(tangon)();
            michal = tangon.getModeratorReportChannelId;
            michal = michal.bind(tangon)();
            if(!entity) { _fun00010_ip = 127; continue _fun00009 }
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
    zuuluu['canReportMessageToMods'] = option;
    option = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = arguments[1];
            golfie = undefined;
            if(!(report === golfie)) { _fun00012_ip = 35; continue _fun00011 }
 9:
            zuuluu = _closure1_slot5;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = _closure1_slot6;
            entity[1] = michal;
            report = entity;
 35:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            tangon = zuuluu.bind(golfie)(entity);
            zuuluu = tangon.getContextForPermission;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity, report);
            tangon = null;
            if(!(tangon != entity)) { _fun00012_ip = 213; continue _fun00011 }
 82:
            verify = entity.user;
            option = entity.guild;
            zuuluu = tangon == option;
            if(zuuluu) { _fun00012_ip = 112; continue _fun00011 }
 99:
            entity = option.getModeratorReportingEnabled;
            entity = entity.bind(option)();
            zuuluu = !entity;
 112:
            if(zuuluu) { _fun00012_ip = 129; continue _fun00011 }
 115:
            entity = option.getModeratorReportChannelId;
            entity = entity.bind(option)();
            zuuluu = tangon == entity;
 129:
            entity = !zuuluu;
            if(zuuluu) { _fun00012_ip = 211; continue _fun00011 }
 135:
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 7;
            zuuluu = offset[zuuluu];
            report = oscard.bind(golfie)(zuuluu);
            tangon = report.hasAny;
            zuuluu = 8;
            zuuluu = offset[zuuluu];
            golfie = oscard.bind(golfie)(zuuluu);
            oscard = golfie.computePermissions;
            zuuluu = {};
            zuuluu['user'] = verify;
            zuuluu['context'] = option;
            option = false;
            zuuluu['checkElevated'] = option;
            zuuluu = oscard.bind(golfie)(zuuluu);
            michal = _closure1_slot7;
            entity = tangon.bind(report)(zuuluu, michal);
 211:
            return entity;
 213:
            entity = false;
            return entity;
        }
    };
    zuuluu['canAccessReportsChannel'] = option;
    zuuluu['isModeratorReportOrPostChannelId'] = golfie;
    golfie = function(argFoo) { // Original name: isModeratorReportChannelId
        zuuluu = _closure1_slot9;
        tangon = _closure1_slot4;
        michal = tangon.getChannel;
        entity = argFoo;
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['isModeratorReportChannelId'] = golfie;
    zuuluu['isModeratorReportChannel'] = oscard;
    oscard = function(argFoo) { // Original name: isModeratorReportPostChannelId
        zuuluu = _closure1_slot10;
        tangon = _closure1_slot4;
        michal = tangon.getChannel;
        entity = argFoo;
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['isModeratorReportPostChannelId'] = oscard;
    zuuluu['isModeratorReportPostChannel'] = report;
    zuuluu['isModeratorReportOrPostChannel'] = tangon;
    tangon = function(argFoo) { // Original name: isSafeToTransitionToReportForCurrentUser
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00014_ip = 146; continue _fun00013 }
 12:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            report = undefined;
            tangon = tangon.bind(report)(entity);
            entity = tangon.isCurrentUserTeen;
            entity = entity.bind(tangon)();
            if(entity) { _fun00014_ip = 54; continue _fun00013 }
 50:
            entity = true;
            return entity;
 54:
            entity = _closure1_slot8;
            entity = entity.bind(report)(oscard);
            if(entity) { _fun00014_ip = 70; continue _fun00013 }
 66:
            entity = true;
            return entity;
 70:
            tangon = _closure1_slot3;
            entity = tangon.getMessage;
            tangon = entity.bind(tangon)(oscard);
            entity = tangon.loaded;
            tangon = tangon.firstMessage;
            entity = !entity;
            if(entity) { _fun00014_ip = 107; continue _fun00013 }
 103:
            entity = zuuluu == tangon;
 107:
            if(entity) { _fun00014_ip = 144; continue _fun00013 }
 110:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.hasExplicitMedia;
            michal = michal.bind(zuuluu)(tangon);
            entity = !michal;
 144:
            return entity;
 146:
            entity = true;
            return entity;
        }
    };
    zuuluu['isSafeToTransitionToReportForCurrentUser'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isModeratorReportThreadStarterMessage
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            entity = zuuluu.isFirstMessageInForumPost;
            entity = entity.bind(zuuluu)(tangon);
            michal = !entity;
            if(michal) { _fun00016_ip = 36; continue _fun00015 }
 23:
            entity = zuuluu.isSystemDM;
            entity = entity.bind(zuuluu)();
            michal = !entity;
 36:
            entity = !michal;
            if(michal) { _fun00016_ip = 56; continue _fun00015 }
 42:
            zuuluu = _closure1_slot10;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 56:
            return entity;
        }
    };
    zuuluu['isModeratorReportThreadStarterMessage'] = michal;
    return entity;
})();