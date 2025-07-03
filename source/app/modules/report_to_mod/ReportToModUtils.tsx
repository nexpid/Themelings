// app/modules/report_to_mod/ReportToModUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = offset;
    golfie = function(argFoo) { // Original name: isModeratorReportOrPostChannelId
        zuuluu = _closure1_slot12;
        tangon = _closure1_slot5;
        michal = tangon.getChannel;
        entity = argFoo;
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot9 = golfie;
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
    var _closure1_slot10 = oscard;
    report = function(argFoo) { // Original name: isModeratorReportPostChannel
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
    var _closure1_slot11 = report;
    tangon = function(argFoo) { // Original name: isModeratorReportOrPostChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00006_ip = 41; continue _fun00005 }
 12:
            michal = _closure1_slot10;
            tangon = undefined;
            michal = michal.bind(tangon)(report);
            if(michal) { _fun00006_ip = 38; continue _fun00005 }
 29:
            zuuluu = _closure1_slot11;
            michal = zuuluu.bind(tangon)(report);
 38:
            entity = michal;
 41:
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
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
    var _closure1_slot4 = option;
    option = 1;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 2;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 3;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 4;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.ReportToModPermissions;
    var _closure1_slot8 = option;
    option = 15;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/report_to_mod/ReportToModUtils.tsx';
    option = verify.bind(offset)(option);
    option = function(argFoo) { // Original name: canReportMessageToMods
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = undefined;
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.canReportUser;
            zuuluu = michal.author;
            zuuluu = tangon.bind(oscard)(zuuluu);
            if(zuuluu) { _fun00008_ip = 52; continue _fun00007 }
 48:
            zuuluu = false;
            return zuuluu;
 52:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            michal = michal.channel_id;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00008_ip = 155; continue _fun00007 }
 77:
            oscard = _closure1_slot6;
            tangon = oscard.getGuild;
            michal = michal.guild_id;
            tangon = tangon.bind(oscard)(michal);
            if(!(zuuluu != tangon)) { _fun00008_ip = 151; continue _fun00007 }
 100:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            entity = 6;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.bind(report)(tangon);
            michal = 7;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.bind(report)(tangon);
            if(!entity) { _fun00008_ip = 149; continue _fun00007 }
 145:
            entity = zuuluu != michal;
 149:
            return entity;
 151:
            entity = false;
            return entity;
 155:
            entity = false;
            return entity;
        }
    };
    zuuluu['canReportMessageToMods'] = option;
    option = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = arguments[1];
            golfie = undefined;
            if(!(report === golfie)) { _fun00010_ip = 35; continue _fun00009 }
 9:
            zuuluu = _closure1_slot6;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = _closure1_slot7;
            entity[1] = michal;
            report = entity;
 35:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            entity = 8;
            entity = tangon[entity];
            tangon = zuuluu.bind(golfie)(entity);
            zuuluu = tangon.getContextForPermission;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity, report);
            tangon = null;
            if(!(tangon != entity)) { _fun00010_ip = 243; continue _fun00009 }
 82:
            verify = entity.user;
            option = entity.guild;
            zuuluu = tangon == option;
            if(zuuluu) { _fun00010_ip = 127; continue _fun00009 }
 99:
            report = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 6;
            entity = oscard[entity];
            entity = report.bind(golfie)(entity);
            entity = entity.bind(golfie)(option);
            zuuluu = !entity;
 127:
            if(zuuluu) { _fun00010_ip = 159; continue _fun00009 }
 130:
            report = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 7;
            entity = oscard[entity];
            entity = report.bind(golfie)(entity);
            entity = entity.bind(golfie)(option);
            zuuluu = tangon == entity;
 159:
            entity = !zuuluu;
            if(zuuluu) { _fun00010_ip = 241; continue _fun00009 }
 165:
            oscard = _closure1_slot2;
            offset = _closure1_slot3;
            zuuluu = 9;
            zuuluu = offset[zuuluu];
            report = oscard.bind(golfie)(zuuluu);
            tangon = report.hasAny;
            zuuluu = 10;
            zuuluu = offset[zuuluu];
            golfie = oscard.bind(golfie)(zuuluu);
            oscard = golfie.computePermissions;
            zuuluu = {};
            zuuluu['user'] = verify;
            zuuluu['context'] = option;
            option = false;
            zuuluu['checkElevated'] = option;
            zuuluu = oscard.bind(golfie)(zuuluu);
            michal = _closure1_slot8;
            entity = tangon.bind(report)(zuuluu, michal);
 241:
            return entity;
 243:
            entity = false;
            return entity;
        }
    };
    zuuluu['canAccessReportsChannel'] = option;
    option = function(argFoo) { // Original name: getReportToModChannelId
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot6;
            zuuluu = tangon.getGuild;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            entity = null;
            zuuluu = entity == tangon;
            if(zuuluu) { _fun00012_ip = 56; continue _fun00011 }
 29:
            report = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 7;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = report.bind(zuuluu)(michal);
            entity = michal.bind(zuuluu)(tangon);
 56:
            return entity;
        }
    };
    zuuluu['getReportToModChannelId'] = option;
    zuuluu['isModeratorReportOrPostChannelId'] = golfie;
    golfie = function(argFoo) { // Original name: isModeratorReportChannelId
        zuuluu = _closure1_slot10;
        tangon = _closure1_slot5;
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
        zuuluu = _closure1_slot11;
        tangon = _closure1_slot5;
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
            report = argFoo;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00014_ip = 171; continue _fun00013 }
 12:
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 11;
            entity = oscard[entity];
            golfie = undefined;
            tangon = tangon.bind(golfie)(entity);
            entity = tangon.isCurrentUserTeen;
            entity = entity.bind(tangon)();
            if(entity) { _fun00014_ip = 54; continue _fun00013 }
 50:
            entity = true;
            return entity;
 54:
            entity = _closure1_slot9;
            entity = entity.bind(golfie)(report);
            if(entity) { _fun00014_ip = 70; continue _fun00013 }
 66:
            entity = true;
            return entity;
 70:
            tangon = _closure1_slot4;
            entity = tangon.getMessage;
            tangon = entity.bind(tangon)(report);
            entity = tangon.loaded;
            report = tangon.firstMessage;
            entity = !entity;
            if(entity) { _fun00014_ip = 107; continue _fun00013 }
 103:
            entity = zuuluu == report;
 107:
            if(entity) { _fun00014_ip = 169; continue _fun00013 }
 110:
            oscard = _closure1_slot0;
            option = _closure1_slot3;
            michal = 12;
            michal = option[michal];
            tangon = oscard.bind(golfie)(michal);
            zuuluu = tangon.messageHasObscurableMediaForBitmask;
            michal = 13;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            michal = michal.ContentHarmTypeBitMask;
            michal = michal.EXPLICIT;
            michal = zuuluu.bind(tangon)(report, michal);
            entity = !michal;
 169:
            return entity;
 171:
            entity = true;
            return entity;
        }
    };
    zuuluu['isSafeToTransitionToReportForCurrentUser'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isModeratorReportThreadStarterMessage
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
            zuuluu = _closure1_slot11;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 56:
            return entity;
        }
    };
    zuuluu['isModeratorReportThreadStarterMessage'] = tangon;
    tangon = function(argFoo) { // Original name: sortedModeratorReportTags
        zuuluu = argFoo;
        michal = zuuluu.sort;
        entity = function(argFoo, argBar) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.id;
                tangon = _closure1_slot0;
                entity = _closure1_slot3;
                oscard = 14;
                entity = entity[oscard];
                report = undefined;
                entity = tangon.bind(report)(entity);
                entity = entity.ReservedTagIds;
                entity = entity.MULTIPLE_REPORTS;
                zuuluu = zuuluu == entity;
                entity = -1;
                if(zuuluu) { _fun00018_ip = 110; continue _fun00017 }
 58:
                zuuluu = argBar;
                zuuluu = zuuluu.id;
                tangon = _closure1_slot0;
                michal = _closure1_slot3;
                michal = michal[oscard];
                michal = tangon.bind(report)(michal);
                michal = michal.ReservedTagIds;
                michal = michal.MULTIPLE_REPORTS;
                zuuluu = zuuluu == michal;
                michal = 0;
                if(!zuuluu) { _fun00018_ip = 107; continue _fun00017 }
 104:
                michal = 1;
 107:
                entity = michal;
 110:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['sortedModeratorReportTags'] = tangon;
    michal = function(argFoo) { // Original name: isModeratorReportMessage
        entity = argFoo;
        zuuluu = entity.messageSnapshots;
        michal = zuuluu.some;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.moderatorReport;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isModeratorReportMessage'] = michal;
    return entity;
})();