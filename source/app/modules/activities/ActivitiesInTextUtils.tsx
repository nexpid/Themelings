// app/modules/activities/ActivitiesInTextUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: isActivityInTextSupportedForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = null;
            if(!(report != zuuluu)) { _fun00002_ip = 234; continue _fun00001 }
 12:
            oscard = _closure1_slot2;
            tangon = oscard.getChannel;
            entity = zuuluu.parent_id;
            tangon = tangon.bind(oscard)(entity);
            entity = report == tangon;
            if(entity) { _fun00002_ip = 94; continue _fun00001 }
 42:
            oscard = report == tangon;
            golfie = undefined;
            report = undefined;
            if(oscard) { _fun00002_ip = 58; continue _fun00001 }
 53:
            report = tangon.type;
 58:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 3;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.ChannelTypes;
            tangon = tangon.GUILD_CATEGORY;
            entity = report === tangon;
 94:
            if(!entity) { _fun00002_ip = 232; continue _fun00001 }
 100:
            tangon = zuuluu.type;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.ChannelTypes;
            option = zuuluu.GUILD_TEXT;
            zuuluu = new Array(4);
            zuuluu[0] = option;
            option = golfie[michal];
            option = oscard.bind(report)(option);
            option = option.ChannelTypes;
            option = option.GUILD_VOICE;
            zuuluu[1] = option;
            option = golfie[michal];
            option = oscard.bind(report)(option);
            option = option.ChannelTypes;
            option = option.GROUP_DM;
            zuuluu[2] = option;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.ChannelTypes;
            michal = michal.DM;
            zuuluu[3] = michal;
            michal = zuuluu.includes;
            entity = michal.bind(zuuluu)(tangon);
 232:
            return entity;
 234:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot5 = report;
    entity = function(argFoo, argBar) { // Original name: isActivitiesInTextEnabledForChannelWithPermissions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = null;
            if(!(report != tangon)) { _fun00004_ip = 79; continue _fun00003 }
 12:
            oscard = undefined;
            if(!(oscard !== tangon)) { _fun00004_ip = 79; continue _fun00003 }
 18:
            michal = _closure1_slot5;
            michal = michal.bind(oscard)(tangon);
            if(michal) { _fun00004_ip = 37; continue _fun00003 }
 33:
            michal = false;
            return michal;
 37:
            michal = tangon.guild_id;
            if(!(report != michal)) { _fun00004_ip = 75; continue _fun00003 }
 46:
            michal = zuuluu.can;
            entity = _closure1_slot4;
            entity = entity.USE_EMBEDDED_ACTIVITIES;
            entity = michal.bind(zuuluu)(entity, tangon);
            if(entity) { _fun00004_ip = 75; continue _fun00003 }
 71:
            entity = false;
            return entity;
 75:
            entity = true;
            return entity;
 79:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    tangon = function(argFoo) { // Original name: getIsAppLauncherEnabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            michal = null;
            report = michal == tangon;
            zuuluu = undefined;
            entity = undefined;
            if(report) { _fun00006_ip = 21; continue _fun00005 }
 16:
            entity = tangon.guild_id;
 21:
            entity = michal != entity;
            if(entity) { _fun00006_ip = 40; continue _fun00005 }
 28:
            michal = _closure1_slot5;
            entity = michal.bind(zuuluu)(tangon);
 40:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.Permissions;
    var _closure1_slot4 = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/ActivitiesInTextUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['isActivityInTextSupportedForChannel'] = report;
    report = function(argFoo) { // Original name: isActivitiesInTextEnabled
        tangon = _closure1_slot6;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = argFoo;
        entity = tangon.bind(michal)(entity, zuuluu);
        return entity;
    };
    zuuluu['isActivitiesInTextEnabled'] = report;
    report = function(argFoo) { // Original name: useIsActivitiesInTextEnabled
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            tangon = _closure1_slot6;
            report = _closure1_slot2;
            zuuluu = report.getChannel;
            michal = _closure2_slot0;
            zuuluu = zuuluu.bind(report)(michal);
            michal = _closure1_slot3;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsActivitiesInTextEnabled'] = report;
    zuuluu['getIsAppLauncherEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: useIsAppLauncherEnabled
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot2;
                zuuluu = tangon.getChannel;
                entity = _closure2_slot0;
                tangon = zuuluu.bind(tangon)(entity);
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00008_ip = 44; continue _fun00007 }
 33:
                zuuluu = _closure1_slot7;
                michal = undefined;
                entity = zuuluu.bind(michal)(tangon);
 44:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsAppLauncherEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useShowActivitiesInOmniButtonMenu
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 4;
            golfie = report[zuuluu];
            oscard = undefined;
            offset = tangon.bind(oscard)(golfie);
            verify = offset.useStateFromStores;
            golfie = _closure1_slot2;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = verify.bind(offset)(option, golfie);
            var _closure2_slot1 = golfie;
            zuuluu = report[zuuluu];
            report = tangon.bind(oscard)(zuuluu);
            tangon = report.useStateFromStores;
            option = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            michal = function() {
                tangon = _closure1_slot3;
                zuuluu = tangon.can;
                entity = _closure1_slot4;
                michal = entity.USE_EMBEDDED_ACTIVITIES;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = _closure1_slot5;
            tangon = michal.bind(oscard)(golfie);
            report = null;
            option = report == golfie;
            michal = undefined;
            if(option) { _fun00010_ip = 128; continue _fun00009 }
 123:
            michal = golfie.guild_id;
 128:
            report = report != michal;
            michal = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 5;
            entity = golfie[entity];
            entity = michal.bind(oscard)(entity);
            golfie = entity.AppLauncherDesktopExperiment;
            oscard = golfie.useExperiment;
            michal = {};
            entity = argBar;
            michal['location'] = entity;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = oscard.bind(golfie)(michal, entity);
            entity = entity.enabled;
            entity = !entity;
            if(!entity) { _fun00010_ip = 217; continue _fun00009 }
 199:
            michal = tangon;
            if(!report) { _fun00010_ip = 214; continue _fun00009 }
 205:
            if(!zuuluu) { _fun00010_ip = 211; continue _fun00009 }
 208:
            zuuluu = tangon;
 211:
            michal = zuuluu;
 214:
            entity = michal;
 217:
            return entity;
        }
    };
    zuuluu['useShowActivitiesInOmniButtonMenu'] = michal;
    return entity;
})();