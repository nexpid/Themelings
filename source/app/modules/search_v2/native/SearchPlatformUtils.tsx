// app/modules/search_v2/native/SearchPlatformUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: getGridItemBorderStyles
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.itemIndex;
            entity = michal.numItems;
            tangon = michal.numColumns;
            michal = global;
            oscard = michal.Math;
            report = oscard.ceil;
            entity = entity / tangon;
            entity = report.bind(oscard)(entity);
            oscard = michal.Math;
            report = oscard.floor;
            michal = zuuluu / tangon;
            oscard = report.bind(oscard)(michal);
            michal = 1;
            report = entity - michal;
            option = 0;
            if(!(option !== zuuluu)) { _fun00002_ip = 262; continue _fun00001 }
 81:
            golfie = tangon - michal;
            if(!(zuuluu !== golfie)) { _fun00002_ip = 214; continue _fun00001 }
 92:
            golfie = zuuluu % tangon;
            if(!(golfie == option)) { _fun00002_ip = 104; continue _fun00001 }
 100:
            if(!(oscard !== report)) { _fun00002_ip = 166; continue _fun00001 }
 104:
            entity = entity * tangon;
            michal = entity - michal;
            report = undefined;
            entity = undefined;
            if(!(zuuluu === michal)) { _fun00002_ip = 164; continue _fun00001 }
 120:
            michal = {};
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderBottomRightRadius'] = zuuluu;
            entity = michal;
 164:
            _fun00002_ip = 212; continue _fun00001;
 166:
            michal = {};
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 9;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderBottomLeftRadius'] = zuuluu;
            entity = michal;
 212:
            _fun00002_ip = 260; continue _fun00001;
 214:
            michal = {};
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 9;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderTopRightRadius'] = zuuluu;
            entity = michal;
 260:
            _fun00002_ip = 308; continue _fun00001;
 262:
            michal = {};
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 9;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderTopLeftRadius'] = zuuluu;
            entity = michal;
 308:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo) { // Original name: getGridItemSpacingStyles
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.itemIndex;
            report = entity.spacing;
            tangon = entity.numColumns;
            entity = 1;
            michal = tangon - entity;
            michal = report * michal;
            michal = michal / tangon;
            zuuluu = zuuluu % tangon;
            report = 0;
            if(!(report !== zuuluu)) { _fun00004_ip = 78; continue _fun00003 }
 45:
            entity = tangon - entity;
            if(!(entity !== zuuluu)) { _fun00004_ip = 69; continue _fun00003 }
 53:
            entity = {};
            zuuluu = 2;
            zuuluu = michal / zuuluu;
            entity['marginHorizontal'] = zuuluu;
            return entity;
 69:
            entity = {};
            entity['marginStart'] = michal;
            return entity;
 78:
            entity = {};
            entity['marginEnd'] = michal;
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.PLATFORM_REGEX_ICON_PAIRS;
    var _closure1_slot4 = oscard;
    oscard = 13;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/search_v2/native/SearchPlatformUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar, argBaz) { // Original name: getAttachmentThumbnailURI
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = report.width;
            oscard = null;
            michal = oscard != entity;
            tangon = undefined;
            entity = undefined;
            if(!michal) { _fun00006_ip = 161; continue _fun00005 }
 24:
            michal = report.width;
            zuuluu = 0;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00006_ip = 161; continue _fun00005 }
 40:
            michal = report.height;
            michal = oscard != michal;
            entity = undefined;
            if(!michal) { _fun00006_ip = 161; continue _fun00005 }
 54:
            michal = report.height;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00006_ip = 161; continue _fun00005 }
 68:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getSrcWithWidthAndHeight;
            michal = {};
            oscard = report.proxy_url;
            michal['src'] = oscard;
            oscard = report.width;
            michal['sourceWidth'] = oscard;
            report = report.height;
            michal['sourceHeight'] = report;
            report = argBar;
            michal['targetWidth'] = report;
            report = argBaz;
            michal['targetHeight'] = report;
            report = 'png';
            michal['format'] = report;
            entity = zuuluu.bind(tangon)(michal);
 161:
            return entity;
        }
    };
    zuuluu['getAttachmentThumbnailURI'] = oscard;
    oscard = function(argFoo, argBar, argBaz) { // Original name: getEmbedMediaURI
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            golfie = null;
            entity = golfie == report;
            tangon = undefined;
            oscard = undefined;
            if(entity) { _fun00008_ip = 22; continue _fun00007 }
 16:
            oscard = report.proxyURL;
 22:
            if(!(golfie == oscard)) { _fun00008_ip = 43; continue _fun00007 }
 26:
            michal = golfie == report;
            entity = undefined;
            if(michal) { _fun00008_ip = 40; continue _fun00007 }
 35:
            entity = report.url;
 40:
            oscard = entity;
 43:
            michal = golfie != oscard;
            entity = undefined;
            if(!michal) { _fun00008_ip = 215; continue _fun00007 }
 55:
            michal = golfie != report;
            entity = undefined;
            if(!michal) { _fun00008_ip = 215; continue _fun00007 }
 67:
            michal = report.width;
            michal = golfie != michal;
            entity = undefined;
            if(!michal) { _fun00008_ip = 215; continue _fun00007 }
 84:
            michal = report.width;
            zuuluu = 0;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00008_ip = 215; continue _fun00007 }
 100:
            michal = report.height;
            michal = golfie != michal;
            entity = undefined;
            if(!michal) { _fun00008_ip = 215; continue _fun00007 }
 114:
            michal = report.height;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00008_ip = 215; continue _fun00007 }
 128:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getSrcWithWidthAndHeight;
            michal = {};
            michal['src'] = oscard;
            oscard = report.width;
            michal['sourceWidth'] = oscard;
            report = report.height;
            michal['sourceHeight'] = report;
            report = argBar;
            michal['targetWidth'] = report;
            report = argBaz;
            michal['targetHeight'] = report;
            report = 'png';
            michal['format'] = report;
            entity = zuuluu.bind(tangon)(michal);
 215:
            return entity;
        }
    };
    zuuluu['getEmbedMediaURI'] = oscard;
    oscard = function(argFoo) { // Original name: performKeyboardAwareNavigation
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.getKeyboardIsOpen;
            report = report.bind(oscard)();
            if(!report) { _fun00010_ip = 80; continue _fun00009 }
 47:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 4;
            report = golfie[report];
            oscard = oscard.bind(entity)(report);
            report = oscard.isIOS;
            report = report.bind(oscard)();
            if(report) { _fun00010_ip = 86; continue _fun00009 }
 80:
            tangon = tangon.bind(entity)();
            _fun00010_ip = 140; continue _fun00009;
 86:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.dismissGlobalKeyboard;
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = global;
            tangon = zuuluu.setTimeout;
            zuuluu = function() {
                michal = _closure2_slot0;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            michal = 100;
            michal = tangon.bind(entity)(zuuluu, michal);
 140:
            return entity;
        }
    };
    zuuluu['performKeyboardAwareNavigation'] = oscard;
    oscard = function(argFoo) { // Original name: delayUntilNavigationComplete
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = global;
        tangon = entity.setTimeout;
        entity = undefined;
        zuuluu = function() {
            michal = _closure2_slot0;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        michal = 200;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['delayUntilNavigationComplete'] = oscard;
    oscard = function(argFoo) { // Original name: getUrlIcon
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            oscard = null;
            if(!(oscard != golfie)) { _fun00012_ip = 241; continue _fun00011 }
 12:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            report = 7;
            michal = michal[report];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.safeParseWithQuery;
            michal = michal.bind(tangon)(golfie);
            if(!(oscard != michal)) { _fun00012_ip = 213; continue _fun00011 }
 55:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.isDiscordUrl;
            michal = michal.bind(tangon)(golfie);
            if(michal) { _fun00012_ip = 185; continue _fun00011 }
 86:
            michal = _closure1_slot4;
            michal = michal.length;
            report = 0;
            michal = report < michal;
            if(!michal) { _fun00012_ip = 155; continue _fun00011 }
 104:
            michal = _closure1_slot4;
            michal = michal[report];
            option = michal.REGEX;
            michal = michal.Icon;
            tangon = option.exec;
            tangon = tangon.bind(option)(golfie);
            if(!(oscard == tangon)) { _fun00012_ip = 183; continue _fun00011 }
 139:
            report = report + 1;
            tangon = _closure1_slot4;
            tangon = tangon.length;
            if(report < tangon) { _fun00012_ip = 104; continue _fun00011 }
 155:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 6;
            tangon = oscard[tangon];
            tangon = report.bind(zuuluu)(tangon);
            tangon = tangon.LinkIcon;
            return tangon;
 183:
            return michal;
 185:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ClydeIcon;
            return michal;
 213:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.LinkIcon;
            return entity;
 241:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.LinkIcon;
            return entity;
        }
    };
    zuuluu['getUrlIcon'] = oscard;
    zuuluu['getGridItemBorderStyles'] = report;
    report = function(argFoo) { // Original name: getMediaGridItemStyles
        entity = argFoo;
        golfie = entity.itemIndex;
        tangon = entity.numItems;
        report = entity.numColumns;
        oscard = entity.spacing;
        entity = {};
        option = _closure1_slot5;
        zuuluu = {};
        zuuluu['itemIndex'] = golfie;
        zuuluu['numItems'] = tangon;
        zuuluu['numColumns'] = report;
        tangon = undefined;
        offset = option.bind(tangon)(zuuluu);
        yankee = entity;
        zuuluu = copyDataProperties(yankee, offset);
        zuuluu = _closure1_slot6;
        michal = {};
        michal['itemIndex'] = golfie;
        michal['spacing'] = oscard;
        michal['numColumns'] = report;
        offset = zuuluu.bind(tangon)(michal);
        yankee = entity;
        michal = copyDataProperties(yankee, offset);
        return entity;
    };
    zuuluu['getMediaGridItemStyles'] = report;
    zuuluu['getGridItemSpacingStyles'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: navigateToSearch
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            michal = argBar;
            tangon = argBaz;
            option = _closure1_slot1;
            entity = _closure1_slot2;
            oscard = 10;
            golfie = entity[oscard];
            entity = undefined;
            option = option.bind(entity)(golfie);
            golfie = option.openSearchScreen;
            golfie = golfie.bind(option)(michal);
            golfie = null;
            if(!(golfie != tangon)) { _fun00014_ip = 193; continue _fun00013 }
 54:
            tangon = tangon.prefetch;
            if(!tangon) { _fun00014_ip = 193; continue _fun00013 }
 66:
            option = _closure1_slot3;
            tangon = michal.type;
            option = option[tangon];
            tangon = 0;
            verify = option[tangon];
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            option = 11;
            option = zuuluu[option];
            offset = tangon.bind(entity)(option);
            option = golfie != verify;
            foxtra = michal.type;
            golfie = global;
            golfie = golfie.HermesInternal;
            romeon = golfie.concat;
            yankee = '[SearchPlatformUtils] Initial tab missing for search context type: ';
            golfie = '.';
            golfie = romeon.bind(yankee)(foxtra, golfie);
            golfie = offset.bind(entity)(option, golfie);
            golfie = 12;
            golfie = zuuluu[golfie];
            option = tangon.bind(entity)(golfie);
            golfie = option.initialize;
            golfie = golfie.bind(option)(michal, verify);
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.fetchInitialMessages;
            zuuluu = zuuluu.bind(tangon)(michal);
 193:
            tangon = report.navigate;
            zuuluu = {};
            zuuluu['searchContext'] = michal;
            michal = 'search';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['navigateToSearch'] = tangon;
    michal = function(argFoo) { // Original name: toSearchBarTag
        michal = argFoo;
        entity = {};
        zuuluu = michal.text;
        entity['id'] = zuuluu;
        michal = michal.text;
        entity['text'] = michal;
        return entity;
    };
    zuuluu['toSearchBarTag'] = michal;
    return entity;
})();