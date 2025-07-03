// app/modules/messages/native/renderer/RowGeneratorUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    option = global;
    verify = option.Object;
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    tangon = michal.NativeModules;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.SwipeActionsType;
    var _closure1_slot3 = michal;
    michal = 2;
    michal = golfie[michal];
    offset = oscard.bind(entity)(michal);
    verify = offset.createNativeStyleProperties;
    michal = {};
    yankee = 3;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_MODIFIER_ACTIVE;
    michal['ephemeralBackgroundColor'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.BRAND_500;
    michal['ephemeralGutterColor'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_MENTIONED;
    michal['mentionedBackgroundColor'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.YELLOW_300;
    michal['mentionedGutterColor'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_MESSAGE_AUTOMOD;
    michal['automodBlockedBackgroundColor'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.RED_345;
    michal['automodBlockedGutterColor'] = foxtra;
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MESSAGE_HIGHLIGHT;
    michal['editingColor'] = yankee;
    michal = verify.bind(offset)(michal);
    var _closure1_slot4 = michal;
    verify = option.Set;
    option = tangon.MediaManager;
    tangon = option.getConstants;
    tangon = tangon.bind(option)();
    sizing = tangon.supportedExtensions;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    output = option;
    tangon = new output[verify](sizing, kiloes);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot5 = tangon;
    tangon = {};
    option = function(argFoo, argBar, argBaz, argCor) { // Original name: getImageSrc
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argCor;
            zuuluu = oscard.endsWith;
            michal = '.webp';
            michal = zuuluu.bind(oscard)(michal);
            michal = !michal;
            if(!michal) { _fun00002_ip = 49; continue _fun00001 }
 29:
            tangon = oscard.endsWith;
            zuuluu = '.avif';
            zuuluu = tangon.bind(oscard)(zuuluu);
            michal = !zuuluu;
 49:
            if(michal) { _fun00002_ip = 75; continue _fun00001 }
 52:
            report = _closure1_slot5;
            tangon = report.has;
            zuuluu = 'webp';
            michal = tangon.bind(report)(zuuluu);
 75:
            if(michal) { _fun00002_ip = 80; continue _fun00001 }
 78:
            entity = true;
 80:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = report.getMobileOptimizedSrc;
            zuuluu = null;
            if(!entity) { _fun00002_ip = 122; continue _fun00001 }
 116:
            zuuluu = 'png';
 122:
            verify = argBar;
            option = argBaz;
            yankee = report;
            offset = oscard;
            golfie = zuuluu;
            entity = yankee[tangon](offset, verify, option, golfie, oscard);
            return entity;
        }
    };
    tangon['getImageSrc'] = option;
    option = function(argFoo) { // Original name: createBackgroundHighlight
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.message;
            golfie = entity.theme;
            oscard = entity.isEditing;
            tangon = entity.isAutomodBlockedMessage;
            zuuluu = _closure1_slot4;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(golfie);
            if(oscard) { _fun00004_ip = 177; continue _fun00003 }
 45:
            if(tangon) { _fun00004_ip = 149; continue _fun00003 }
 48:
            tangon = report.mentioned;
            if(tangon) { _fun00004_ip = 121; continue _fun00003 }
 57:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.hasEphemeralAppearance;
            michal = michal.bind(tangon)(report);
            entity = undefined;
            if(!michal) { _fun00004_ip = 119; continue _fun00003 }
 93:
            michal = {};
            tangon = zuuluu.ephemeralBackgroundColor;
            michal['backgroundColor'] = tangon;
            tangon = zuuluu.ephemeralGutterColor;
            michal['gutterColor'] = tangon;
            entity = michal;
 119:
            _fun00004_ip = 147; continue _fun00003;
 121:
            michal = {};
            tangon = zuuluu.mentionedBackgroundColor;
            michal['backgroundColor'] = tangon;
            tangon = zuuluu.mentionedGutterColor;
            michal['gutterColor'] = tangon;
            entity = michal;
 147:
            _fun00004_ip = 175; continue _fun00003;
 149:
            michal = {};
            tangon = zuuluu.automodBlockedBackgroundColor;
            michal['backgroundColor'] = tangon;
            tangon = zuuluu.automodBlockedGutterColor;
            michal['gutterColor'] = tangon;
            entity = michal;
 175:
            _fun00004_ip = 192; continue _fun00003;
 177:
            michal = {};
            zuuluu = zuuluu.editingColor;
            michal['backgroundColor'] = zuuluu;
            entity = michal;
 192:
            return entity;
        }
    };
    tangon['createBackgroundHighlight'] = option;
    report = function(argFoo, argBar) { // Original name: createSwipeActions
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot3;
            entity = argFoo;
            if(entity) { _fun00006_ip = 21; continue _fun00005 }
 13:
            entity = zuuluu.NONE;
            _fun00006_ip = 44; continue _fun00005;
 21:
            michal = argBar;
            if(michal) { _fun00006_ip = 35; continue _fun00005 }
 27:
            michal = zuuluu.REPLY;
            _fun00006_ip = 41; continue _fun00005;
 35:
            michal = zuuluu.REPLY_EDIT;
 41:
            entity = michal;
 44:
            return entity;
        }
    };
    tangon['createSwipeActions'] = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/RowGeneratorUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = {'dark': '#313339', 'light': '#fafafa'};
    zuuluu['InviteEmbedBackground'] = tangon;
    zuuluu['resolveHighlightThemedColors'] = michal;
    return entity;
})();