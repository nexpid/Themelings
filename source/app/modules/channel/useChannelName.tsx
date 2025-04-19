// app/modules/channel/useChannelName.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golfie = function(argFoo, argBar, argBaz) { // Original name: computeDefaultGroupDmNameFromUserIds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            verify = argBar;
            michal = argBaz;
            var _closure2_slot0 = michal;
            zuuluu = tangon.map;
            michal = verify.getUser;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            option = undefined;
            michal = report.bind(option)(michal);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.getNickname;
                    entity = tangon.id;
                    entity = michal.bind(zuuluu)(entity);
                    michal = null;
                    if(!(michal == entity)) { _fun00004_ip = 68; continue _fun00003 }
 32:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.getName;
                    entity = michal.bind(zuuluu)(tangon);
 68:
                    return entity;
                }
            };
            tangon = michal.bind(zuuluu)(entity);
            michal = tangon.length;
            entity = 0;
            if(!(!(michal > entity))) { _fun00002_ip = 200; continue _fun00001 }
 98:
            michal = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 7;
            zuuluu = offset[entity];
            zuuluu = michal.bind(option)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.formatToPlainString;
            entity = offset[entity];
            entity = michal.bind(option)(entity);
            entity = entity.t;
            michal = entity.9Uk8PD;
            entity = {};
            golfie = _closure1_slot1;
            oscard = 6;
            oscard = offset[oscard];
            option = golfie.bind(option)(oscard);
            golfie = option.getName;
            oscard = verify.getCurrentUser;
            oscard = oscard.bind(verify)();
            oscard = golfie.bind(option)(oscard);
            entity['name'] = oscard;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00002_ip = 216; continue _fun00001;
 200:
            zuuluu = tangon.join;
            michal = ', ';
            entity = zuuluu.bind(tangon)(michal);
 216:
            return entity;
        }
    };
    var _closure1_slot8 = golfie;
    oscard = function(argFoo, argBar, argBaz) { // Original name: computeDefaultGroupDmName
        report = _closure1_slot8;
        entity = argFoo;
        tangon = entity.recipients;
        zuuluu = undefined;
        michal = argBar;
        entity = argBaz;
        entity = report.bind(zuuluu)(tangon, michal, entity);
        return entity;
    };
    var _closure1_slot9 = oscard;
    report = function(argFoo, argBar, argBaz) { // Original name: computeChannelName
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            option = argBaz;
            zuuluu = arguments[3];
            tangon = arguments[4];
            golfie = undefined;
            if(!(zuuluu === golfie)) { _fun00006_ip = 23; continue _fun00005 }
 21:
            zuuluu = false;
 23:
            if(!(tangon === golfie)) { _fun00006_ip = 29; continue _fun00005 }
 27:
            tangon = false;
 29:
            verify = michal.type;
            oscard = _closure1_slot7;
            oscard = oscard.DM;
            if(!(oscard !== verify)) { _fun00006_ip = 401; continue _fun00005 }
 54:
            oscard = _closure1_slot7;
            oscard = oscard.GROUP_DM;
            if(!(oscard !== verify)) { _fun00006_ip = 368; continue _fun00005 }
 71:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_ANNOUNCEMENT;
            if(!(oscard !== verify)) { _fun00006_ip = 331; continue _fun00005 }
 88:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_TEXT;
            if(!(oscard !== verify)) { _fun00006_ip = 331; continue _fun00005 }
 105:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_FORUM;
            if(!(oscard !== verify)) { _fun00006_ip = 331; continue _fun00005 }
 122:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_MEDIA;
            if(!(oscard !== verify)) { _fun00006_ip = 331; continue _fun00005 }
 139:
            oscard = _closure1_slot7;
            oscard = oscard.PUBLIC_THREAD;
            if(!(oscard !== verify)) { _fun00006_ip = 230; continue _fun00005 }
 153:
            oscard = _closure1_slot7;
            oscard = oscard.PRIVATE_THREAD;
            if(!(oscard !== verify)) { _fun00006_ip = 230; continue _fun00005 }
 167:
            oscard = _closure1_slot7;
            oscard = oscard.ANNOUNCEMENT_THREAD;
            if(!(oscard !== verify)) { _fun00006_ip = 230; continue _fun00005 }
 181:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_VOICE;
            if(!(oscard !== verify)) { _fun00006_ip = 230; continue _fun00005 }
 195:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_STAGE_VOICE;
            if(!(oscard !== verify)) { _fun00006_ip = 230; continue _fun00005 }
 209:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_CATEGORY;
            if(!(oscard !== verify)) { _fun00006_ip = 230; continue _fun00005 }
 223:
            oscard = michal.name;
            return oscard;
 230:
            if(tangon) { _fun00006_ip = 286; continue _fun00005 }
 233:
            if(!zuuluu) { _fun00006_ip = 249; continue _fun00005 }
 236:
            tangon = michal.isThread;
            tangon = tangon.bind(michal)();
            if(tangon) { _fun00006_ip = 256; continue _fun00005 }
 249:
            tangon = michal.name;
            _fun00006_ip = 284; continue _fun00005;
 256:
            offset = michal.name;
            oscard = global;
            oscard = oscard.HermesInternal;
            verify = oscard.concat;
            oscard = '"';
            tangon = verify.bind(oscard)(offset, oscard);
 284:
            _fun00006_ip = 329; continue _fun00005;
 286:
            verify = _closure1_slot11;
            oscard = michal.name;
            yankee = verify.bind(golfie)(oscard);
            oscard = global;
            oscard = oscard.HermesInternal;
            offset = oscard.concat;
            verify = '#"';
            oscard = '"';
            tangon = offset.bind(verify)(yankee, oscard);
 329:
            return tangon;
 331:
            offset = michal.name;
            if(zuuluu) { _fun00006_ip = 344; continue _fun00005 }
 339:
            tangon = offset;
            _fun00006_ip = 366; continue _fun00005;
 344:
            oscard = global;
            oscard = oscard.HermesInternal;
            verify = oscard.concat;
            oscard = '#';
            tangon = verify.bind(oscard)(offset);
 366:
            return tangon;
 368:
            oscard = michal.name;
            tangon = '';
            if(!(tangon === oscard)) { _fun00006_ip = 394; continue _fun00005 }
 381:
            tangon = _closure1_slot9;
            tangon = tangon.bind(golfie)(michal, entity, option);
            _fun00006_ip = 399; continue _fun00005;
 394:
            tangon = michal.name;
 399:
            return tangon;
 401:
            tangon = michal.recipients;
            michal = tangon.map;
            entity = entity.getUser;
            tangon = michal.bind(tangon)(entity);
            michal = tangon.filter;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            entity = oscard.bind(golfie)(entity);
            entity = entity.isNotNullish;
            tangon = michal.bind(tangon)(entity);
            michal = _closure1_slot3;
            entity = 1;
            michal = michal.bind(golfie)(tangon, entity);
            entity = 0;
            entity = michal[entity];
            tangon = null;
            if(!(tangon != entity)) { _fun00006_ip = 611; continue _fun00005 }
 487:
            michal = entity.isProvisional;
            if(!michal) { _fun00006_ip = 506; continue _fun00005 }
 496:
            michal = entity.globalName;
            if(!(tangon == michal)) { _fun00006_ip = 603; continue _fun00005 }
 506:
            oscard = option.getNickname;
            michal = entity.id;
            michal = oscard.bind(option)(michal);
            if(!(tangon == michal)) { _fun00006_ip = 557; continue _fun00005 }
 526:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            report = 6;
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            report = oscard.getName;
            michal = report.bind(oscard)(entity);
 557:
            tangon = tangon != michal;
            report = '???';
            if(!tangon) { _fun00006_ip = 573; continue _fun00005 }
 570:
            report = michal;
 573:
            michal = report;
            if(!zuuluu) { _fun00006_ip = 601; continue _fun00005 }
 579:
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '@';
            michal = tangon.bind(zuuluu)(report);
 601:
            return michal;
 603:
            entity = entity.globalName;
            return entity;
 611:
            entity = '???';
            return entity;
        }
    };
    var _closure1_slot10 = report;
    tangon = function(argFoo) { // Original name: escapeChannelName
        tangon = argFoo;
        zuuluu = tangon.replace;
        michal = /\\/g;
        entity = '\\\\';
        tangon = zuuluu.bind(tangon)(michal, entity);
        zuuluu = tangon.replace;
        michal = /"/g;
        entity = '\\"';
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
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
    option = option.ChannelTypes;
    var _closure1_slot7 = option;
    option = 9;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/channel/useChannelName.tsx';
    option = verify.bind(offset)(option);
    option = function(argFoo) { // Original name: useChannelName
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[1];
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            michal = false;
 20:
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 8;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.useStateFromStores;
            oscard = _closure1_slot6;
            michal = new Array(3);
            michal[0] = oscard;
            oscard = _closure1_slot4;
            michal[1] = oscard;
            report = _closure1_slot5;
            michal[2] = report;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    if(zuuluu) { _fun00010_ip = 45; continue _fun00009 }
 16:
                    golfie = _closure1_slot10;
                    yankee = _closure2_slot0;
                    offset = _closure1_slot6;
                    verify = _closure1_slot5;
                    option = _closure2_slot1;
                    romeon = undefined;
                    entity = romeon[golfie](yankee, offset, verify, option, golfie);
 45:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = option;
    zuuluu['computeDefaultGroupDmNameFromUserIds'] = golfie;
    zuuluu['computeDefaultGroupDmName'] = oscard;
    oscard = function(argFoo) { // Original name: useComputedGroupDmName
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 8;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot6;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot5;
        michal[1] = report;
        entity = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = _closure2_slot0;
                tangon = null;
                michal = tangon != entity;
                entity = null;
                if(!michal) { _fun00012_ip = 65; continue _fun00011 }
 18:
                report = _closure2_slot0;
                michal = report.isMultiUserDM;
                michal = michal.bind(report)();
                entity = null;
                if(!michal) { _fun00012_ip = 65; continue _fun00011 }
 37:
                oscard = _closure1_slot9;
                report = _closure2_slot0;
                tangon = _closure1_slot6;
                zuuluu = _closure1_slot5;
                michal = undefined;
                entity = oscard.bind(michal)(report, tangon, zuuluu);
 65:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useComputedGroupDmName'] = oscard;
    zuuluu['computeChannelName'] = report;
    zuuluu['escapeChannelName'] = tangon;
    michal = function(argFoo) { // Original name: unescapeChannelName
        tangon = argFoo;
        zuuluu = tangon.replace;
        michal = /\\"/g;
        entity = '"';
        tangon = zuuluu.bind(tangon)(michal, entity);
        zuuluu = tangon.replace;
        michal = /\\\\/g;
        entity = '\\';
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['unescapeChannelName'] = michal;
    return entity;
})();