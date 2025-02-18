// app/modules/channel/useChannelName.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar, argBaz) { // Original name: computeChannelName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = argBar;
            option = argBaz;
            michal = arguments[3];
            oscard = arguments[4];
            var _closure2_slot0 = option;
            golfie = undefined;
            if(!(michal === golfie)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            michal = false;
 29:
            if(!(oscard === golfie)) { _fun00002_ip = 35; continue _fun00001 }
 33:
            oscard = false;
 35:
            offset = zuuluu.type;
            verify = _closure1_slot7;
            verify = verify.DM;
            if(!(verify !== offset)) { _fun00002_ip = 601; continue _fun00001 }
 60:
            verify = _closure1_slot7;
            verify = verify.GROUP_DM;
            if(!(verify !== offset)) { _fun00002_ip = 374; continue _fun00001 }
 77:
            verify = _closure1_slot7;
            verify = verify.GUILD_ANNOUNCEMENT;
            if(!(verify !== offset)) { _fun00002_ip = 337; continue _fun00001 }
 94:
            verify = _closure1_slot7;
            verify = verify.GUILD_TEXT;
            if(!(verify !== offset)) { _fun00002_ip = 337; continue _fun00001 }
 111:
            verify = _closure1_slot7;
            verify = verify.GUILD_FORUM;
            if(!(verify !== offset)) { _fun00002_ip = 337; continue _fun00001 }
 128:
            verify = _closure1_slot7;
            verify = verify.GUILD_MEDIA;
            if(!(verify !== offset)) { _fun00002_ip = 337; continue _fun00001 }
 145:
            verify = _closure1_slot7;
            verify = verify.PUBLIC_THREAD;
            if(!(verify !== offset)) { _fun00002_ip = 236; continue _fun00001 }
 159:
            verify = _closure1_slot7;
            verify = verify.PRIVATE_THREAD;
            if(!(verify !== offset)) { _fun00002_ip = 236; continue _fun00001 }
 173:
            verify = _closure1_slot7;
            verify = verify.ANNOUNCEMENT_THREAD;
            if(!(verify !== offset)) { _fun00002_ip = 236; continue _fun00001 }
 187:
            verify = _closure1_slot7;
            verify = verify.GUILD_VOICE;
            if(!(verify !== offset)) { _fun00002_ip = 236; continue _fun00001 }
 201:
            verify = _closure1_slot7;
            verify = verify.GUILD_STAGE_VOICE;
            if(!(verify !== offset)) { _fun00002_ip = 236; continue _fun00001 }
 215:
            verify = _closure1_slot7;
            verify = verify.GUILD_CATEGORY;
            if(!(verify !== offset)) { _fun00002_ip = 236; continue _fun00001 }
 229:
            verify = zuuluu.name;
            return verify;
 236:
            if(oscard) { _fun00002_ip = 292; continue _fun00001 }
 239:
            if(!michal) { _fun00002_ip = 255; continue _fun00001 }
 242:
            oscard = zuuluu.isThread;
            oscard = oscard.bind(zuuluu)();
            if(oscard) { _fun00002_ip = 262; continue _fun00001 }
 255:
            oscard = zuuluu.name;
            _fun00002_ip = 290; continue _fun00001;
 262:
            yankee = zuuluu.name;
            verify = global;
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '"';
            oscard = offset.bind(verify)(yankee, verify);
 290:
            _fun00002_ip = 335; continue _fun00001;
 292:
            offset = _closure1_slot9;
            verify = zuuluu.name;
            romeon = offset.bind(golfie)(verify);
            verify = global;
            verify = verify.HermesInternal;
            yankee = verify.concat;
            offset = '#"';
            verify = '"';
            oscard = yankee.bind(offset)(romeon, verify);
 335:
            return oscard;
 337:
            yankee = zuuluu.name;
            if(michal) { _fun00002_ip = 350; continue _fun00001 }
 345:
            oscard = yankee;
            _fun00002_ip = 372; continue _fun00001;
 350:
            verify = global;
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '#';
            oscard = offset.bind(verify)(yankee);
 372:
            return oscard;
 374:
            verify = zuuluu.name;
            oscard = '';
            if(!(oscard === verify)) { _fun00002_ip = 594; continue _fun00001 }
 390:
            offset = zuuluu.recipients;
            verify = offset.map;
            oscard = entity.getUser;
            offset = verify.bind(offset)(oscard);
            verify = offset.filter;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 5;
            oscard = romeon[oscard];
            oscard = yankee.bind(golfie)(oscard);
            oscard = oscard.isNotNullish;
            verify = verify.bind(offset)(oscard);
            oscard = verify.map;
            report = function(argFoo) {
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
            offset = oscard.bind(verify)(report);
            oscard = offset.length;
            report = 0;
            if(!(!(oscard > report))) { _fun00002_ip = 576; continue _fun00001 }
 474:
            oscard = _closure1_slot0;
            backup = _closure1_slot2;
            report = 7;
            verify = backup[report];
            verify = oscard.bind(golfie)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            report = backup[report];
            report = oscard.bind(golfie)(report);
            report = report.t;
            oscard = report.9Uk8PD;
            report = {};
            foxtra = _closure1_slot1;
            romeon = 6;
            romeon = backup[romeon];
            backup = foxtra.bind(golfie)(romeon);
            foxtra = backup.getName;
            romeon = entity.getCurrentUser;
            romeon = romeon.bind(entity)();
            romeon = foxtra.bind(backup)(romeon);
            report['name'] = romeon;
            report = verify.bind(yankee)(oscard, report);
            _fun00002_ip = 592; continue _fun00001;
 576:
            verify = offset.join;
            oscard = ', ';
            report = verify.bind(offset)(oscard);
 592:
            return report;
 594:
            report = zuuluu.name;
            return report;
 601:
            report = zuuluu.recipients;
            zuuluu = report.map;
            entity = entity.getUser;
            report = zuuluu.bind(report)(entity);
            zuuluu = report.filter;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            entity = oscard.bind(golfie)(entity);
            entity = entity.isNotNullish;
            report = zuuluu.bind(report)(entity);
            zuuluu = _closure1_slot3;
            entity = 1;
            zuuluu = zuuluu.bind(golfie)(report, entity);
            entity = 0;
            oscard = zuuluu[entity];
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00002_ip = 781; continue _fun00001 }
 684:
            report = option.getNickname;
            entity = oscard.id;
            entity = report.bind(option)(entity);
            if(!(zuuluu == entity)) { _fun00002_ip = 735; continue _fun00001 }
 704:
            report = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 6;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.getName;
            entity = tangon.bind(report)(oscard);
 735:
            zuuluu = zuuluu != entity;
            tangon = '???';
            if(!zuuluu) { _fun00002_ip = 751; continue _fun00001 }
 748:
            tangon = entity;
 751:
            entity = tangon;
            if(!michal) { _fun00002_ip = 779; continue _fun00001 }
 757:
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '@';
            entity = zuuluu.bind(michal)(tangon);
 779:
            return entity;
 781:
            entity = '???';
            return entity;
        }
    };
    var _closure1_slot8 = report;
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
    var _closure1_slot9 = tangon;
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
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ChannelTypes;
    var _closure1_slot7 = oscard;
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/channel/useChannelName.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: useChannelName
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = arguments[1];
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00006_ip = 20; continue _fun00005 }
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
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    if(zuuluu) { _fun00008_ip = 45; continue _fun00007 }
 16:
                    golfie = _closure1_slot8;
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
    zuuluu['default'] = oscard;
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