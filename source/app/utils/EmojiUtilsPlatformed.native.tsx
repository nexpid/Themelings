// app/utils/EmojiUtilsPlatformed.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    verify = function(argFoo) { // Original name: getURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00002_ip = 50; continue _fun00001 }
 9:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.isAndroid;
            michal = entity.bind(michal)();
            entity = '';
            if(!michal) { _fun00002_ip = 105; continue _fun00001 }
 50:
            michal = _closure1_slot7;
            zuuluu = michal.convert;
            michal = zuuluu.toCodePoint;
            report = michal.bind(zuuluu)(tangon);
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = 'asset:/emoji-';
            michal = '.png';
            entity = tangon.bind(zuuluu)(report, michal);
 105:
            return entity;
        }
    };
    var _closure1_slot8 = verify;
    entity = function() { // Original name: _getEmojiColors
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 282; continue _fun00003 }
 13:
                    option = zuuluu.id;
                    oscard = zuuluu.name;
                    report = null;
                    if(!(report == option)) { _fun00004_ip = 45; continue _fun00003 }
 29:
                    tangon = _closure1_slot8;
                    michal = undefined;
                    golfie = tangon.bind(michal)(oscard);
                    _fun00004_ip = 101; continue _fun00003;
 45:
                    oscard = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 7;
                    tangon = tangon[michal];
                    michal = undefined;
                    oscard = oscard.bind(michal)(tangon);
                    tangon = oscard.getEmojiURL;
                    michal = {'id': null, 'size': 32, 'animated': false};
                    michal['id'] = option;
                    golfie = tangon.bind(oscard)(michal);
 101:
                    michal = '';
                    if(!(michal === golfie)) { _fun00004_ip = 201; continue _fun00003 }
 109:
                    tangon = _closure1_slot5;
                    oscard = tangon.ImageManager;
                    tangon = oscard.getEmojiBase64;
                    zuuluu = zuuluu.name;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 8;
                    option = option[michal];
                    michal = undefined;
                    michal = verify.bind(michal)(option);
                    michal = michal.EMOJI_IN_ANIMATION_SIZE;
                    michal = tangon.bind(oscard)(zuuluu, michal);
                    SaveGenerator(address=171);
 169:
                    return michal;
 171:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 279; continue _fun00003 }
 177:
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    tangon = zuuluu.concat;
                    zuuluu = 'data:image/png;base64,';
                    golfie = tangon.bind(zuuluu)(michal);
 201:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 9;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = oscard.getPaletteForAvatar;
                    zuuluu = zuuluu.bind(oscard)(golfie);
                    SaveGenerator(address=241);
 239:
                    return zuuluu;
 241:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 276; continue _fun00003 }
 247:
                    report = report == zuuluu;
                    tangon = undefined;
                    if(report) { _fun00004_ip = 273; continue _fun00003 }
 256:
                    oscard = zuuluu.map;
                    report = function(argFoo) {
                        tangon = _closure1_slot3;
                        oscard = undefined;
                        zuuluu = argFoo;
                        michal = 3;
                        zuuluu = tangon.bind(oscard)(zuuluu, michal);
                        michal = 0;
                        report = zuuluu[michal];
                        michal = 1;
                        tangon = zuuluu[michal];
                        michal = 2;
                        zuuluu = zuuluu[michal];
                        michal = _closure1_slot0;
                        golfie = _closure1_slot2;
                        entity = 10;
                        entity = golfie[entity];
                        michal = michal.bind(oscard)(entity);
                        entity = michal.rgbToHex;
                        entity = entity.bind(michal)(report, tangon, zuuluu);
                        return entity;
                    };
                    tangon = oscard.bind(zuuluu)(report);
 273:
                    return tangon;
 276:
                    return zuuluu;
 279:
                    return michal;
 282:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.NativeModules;
    var _closure1_slot5 = golfie;
    michal = michal.processColor;
    var _closure1_slot6 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = {};
    golfie = 12;
    golfie = oscard[golfie];
    option = option.bind(entity)(golfie);
    golfie = option.makeMemoizer;
    golfie = golfie.bind(option)(verify);
    michal['getURL'] = golfie;
    golfie = function(argFoo) { // Original name: filterUnsupportedEmojis
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isAndroid;
            zuuluu = entity.bind(zuuluu)();
            entity = report;
            if(zuuluu) { _fun00006_ip = 81; continue _fun00005 }
 43:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.unicodeVersion;
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    golfie = 4;
                    entity = entity[golfie];
                    option = undefined;
                    michal = michal.bind(option)(entity);
                    entity = michal.getSystemVersion;
                    tangon = entity.bind(michal)();
                    michal = tangon.split;
                    entity = '.';
                    entity = michal.bind(tangon)(entity);
                    michal = global;
                    oscard = michal.parseInt;
                    report = 0;
                    tangon = entity[report];
                    tangon = oscard.bind(option)(tangon);
                    verify = entity.length;
                    oscard = 1;
                    verify = verify > oscard;
                    if(!verify) { _fun00008_ip = 106; continue _fun00007 }
 91:
                    michal = michal.parseInt;
                    entity = entity[oscard];
                    report = michal.bind(option)(entity);
 106:
                    entity = 8;
                    michal = zuuluu > entity;
                    entity = true;
                    if(!michal) { _fun00008_ip = 521; continue _fun00007 }
 121:
                    michal = 9;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 491; continue _fun00007 }
 131:
                    michal = 10;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 462; continue _fun00007 }
 141:
                    michal = 11;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 433; continue _fun00007 }
 151:
                    michal = 12;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 401; continue _fun00007 }
 161:
                    michal = 12.1;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 401; continue _fun00007 }
 178:
                    michal = 13;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 369; continue _fun00007 }
 188:
                    michal = 13.1;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 334; continue _fun00007 }
 205:
                    michal = 14;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 302; continue _fun00007 }
 212:
                    michal = 15;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 270; continue _fun00007 }
 219:
                    entity = false;
                    michal = 15.1;
                    if(!(michal === zuuluu)) { _fun00008_ip = 521; continue _fun00007 }
 238:
                    zuuluu = 17;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 262; continue _fun00007 }
 248:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 259; continue _fun00007 }
 255:
                    zuuluu = report >= golfie;
 259:
                    michal = zuuluu;
 262:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 270:
                    zuuluu = 16;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 294; continue _fun00007 }
 280:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 291; continue _fun00007 }
 287:
                    zuuluu = report >= golfie;
 291:
                    michal = zuuluu;
 294:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 302:
                    zuuluu = 15;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 326; continue _fun00007 }
 312:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 323; continue _fun00007 }
 319:
                    zuuluu = report >= golfie;
 323:
                    michal = zuuluu;
 326:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 334:
                    zuuluu = 14;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 361; continue _fun00007 }
 344:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 358; continue _fun00007 }
 351:
                    golfie = 5;
                    zuuluu = report >= golfie;
 358:
                    michal = zuuluu;
 361:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 369:
                    zuuluu = 14;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 396; continue _fun00007 }
 379:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 393; continue _fun00007 }
 386:
                    golfie = 2;
                    zuuluu = report >= golfie;
 393:
                    michal = zuuluu;
 396:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 401:
                    zuuluu = 13;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 428; continue _fun00007 }
 411:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 425; continue _fun00007 }
 418:
                    golfie = 2;
                    zuuluu = report >= golfie;
 425:
                    michal = zuuluu;
 428:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 433:
                    zuuluu = 12;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 457; continue _fun00007 }
 443:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 454; continue _fun00007 }
 450:
                    zuuluu = report >= oscard;
 454:
                    michal = zuuluu;
 457:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 462:
                    zuuluu = 11;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 486; continue _fun00007 }
 472:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 483; continue _fun00007 }
 479:
                    zuuluu = report >= oscard;
 483:
                    michal = zuuluu;
 486:
                    entity = michal;
                    _fun00008_ip = 521; continue _fun00007;
 491:
                    zuuluu = 10;
                    michal = tangon > zuuluu;
                    if(michal) { _fun00008_ip = 518; continue _fun00007 }
 501:
                    zuuluu = zuuluu === tangon;
                    if(!zuuluu) { _fun00008_ip = 515; continue _fun00007 }
 508:
                    tangon = 2;
                    zuuluu = report >= tangon;
 515:
                    michal = zuuluu;
 518:
                    entity = michal;
 521:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(report, michal);
 81:
            return entity;
        }
    };
    michal['filterUnsupportedEmojis'] = golfie;
    golfie = function(argFoo) { // Original name: applyPlatformToThemedEmojiColorPalette
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = michal.palette;
            michal = michal.shouldProcessMobileColors;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00010_ip = 23; continue _fun00009 }
 21:
            michal = false;
 23:
            if(!michal) { _fun00010_ip = 273; continue _fun00009 }
 29:
            oscard = null;
            if(!(oscard != entity)) { _fun00010_ip = 273; continue _fun00009 }
 38:
            verify = entity.LIGHT;
            report = entity.DARK;
            michal = {};
            zuuluu = {};
            offset = _closure1_slot6;
            yankee = oscard == verify;
            option = undefined;
            if(yankee) { _fun00010_ip = 74; continue _fun00009 }
 68:
            option = verify.accentColor;
 74:
            option = offset.bind(tangon)(option);
            zuuluu['accentColor'] = option;
            offset = _closure1_slot6;
            yankee = oscard == verify;
            option = undefined;
            if(yankee) { _fun00010_ip = 102; continue _fun00009 }
 97:
            option = verify.backgroundColor;
 102:
            option = offset.bind(tangon)(option);
            zuuluu['backgroundColor'] = option;
            offset = _closure1_slot6;
            yankee = oscard == verify;
            option = undefined;
            if(yankee) { _fun00010_ip = 130; continue _fun00009 }
 124:
            option = verify.highlightColor;
 130:
            option = offset.bind(tangon)(option);
            zuuluu['highlightColor'] = option;
            offset = oscard == verify;
            option = undefined;
            if(offset) { _fun00010_ip = 154; continue _fun00009 }
 149:
            option = verify.opacity;
 154:
            zuuluu['opacity'] = option;
            michal['LIGHT'] = zuuluu;
            zuuluu = {};
            verify = _closure1_slot6;
            offset = oscard == report;
            option = undefined;
            if(offset) { _fun00010_ip = 183; continue _fun00009 }
 177:
            option = report.accentColor;
 183:
            option = verify.bind(tangon)(option);
            zuuluu['accentColor'] = option;
            verify = _closure1_slot6;
            offset = oscard == report;
            option = undefined;
            if(offset) { _fun00010_ip = 211; continue _fun00009 }
 206:
            option = report.backgroundColor;
 211:
            option = verify.bind(tangon)(option);
            zuuluu['backgroundColor'] = option;
            option = _closure1_slot6;
            verify = oscard == report;
            golfie = undefined;
            if(verify) { _fun00010_ip = 239; continue _fun00009 }
 233:
            golfie = report.highlightColor;
 239:
            golfie = option.bind(tangon)(golfie);
            zuuluu['highlightColor'] = golfie;
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00010_ip = 263; continue _fun00009 }
 258:
            tangon = report.opacity;
 263:
            zuuluu['opacity'] = tangon;
            michal['DARK'] = zuuluu;
            return michal;
 273:
            return entity;
        }
    };
    michal['applyPlatformToThemedEmojiColorPalette'] = golfie;
    golfie = function() { // Original name: getEmojiColors
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['getEmojiColors'] = golfie;
    tangon = function(argFoo) { // Original name: triggerFullscreenAnimation
        entity = argFoo;
        golfie = entity.channelId;
        oscard = entity.messageId;
        report = entity.emoji;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.openBurstReactionFirstSendActionSheet;
        michal = {};
        michal['channelId'] = golfie;
        michal['messageId'] = oscard;
        michal['emoji'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['triggerFullscreenAnimation'] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/EmojiUtilsPlatformed.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();