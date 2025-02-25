// app/modules/markup/PlatformMarkupRules.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: decorateWithIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            entity = zuuluu;
            if(!(michal != zuuluu)) { _fun00002_ip = 72; continue _fun00001 }
 12:
            tangon = 'string';
            michal = typeof zuuluu;
            entity = zuuluu;
            if(!(tangon !== michal)) { _fun00002_ip = 72; continue _fun00001 }
 26:
            michal = global;
            michal = michal.Array;
            michal = zuuluu instanceof michal;
            tangon = zuuluu;
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 44:
            michal = new Array(1);
            michal[0] = zuuluu;
            tangon = michal;
 55:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.type;
                    michal = 'channel';
                    entity = zuuluu;
                    if(!(michal === tangon)) { _fun00004_ip = 114; continue _fun00003 }
 19:
                    michal = {};
                    offset = michal;
                    verify = zuuluu;
                    tangon = copyDataProperties(offset, verify);
                    oscard = _closure1_slot3;
                    report = oscard.resolveAssetSource;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 1;
                    golfie = golfie[tangon];
                    tangon = undefined;
                    option = option.bind(tangon)(golfie);
                    golfie = option.getChannelMentionIcon;
                    zuuluu = zuuluu.iconType;
                    zuuluu = golfie.bind(option)(zuuluu);
                    zuuluu = report.bind(oscard)(zuuluu);
                    report = null;
                    report = report == zuuluu;
                    if(report) { _fun00004_ip = 102; continue _fun00003 }
 97:
                    tangon = zuuluu.uri;
 102:
                    zuuluu = 'icon';
                    michal[zuuluu] = tangon;
                    entity = michal;
 114:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 72:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.Image;
    var _closure1_slot3 = michal;
    michal = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
    var _closure1_slot4 = michal;
    michal = {};
    tangon = {};
    option = ['\\'];
    tangon['requiredFirstCharacters'] = option;
    option = function(argFoo, argBar) { // Original name: match
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argBar;
            michal = entity.allowEscape;
            entity = false;
            if(!(entity !== michal)) { _fun00006_ip = 148; continue _fun00005 }
 18:
            zuuluu = /^\\([^0-9A-Za-z\s])/;
            michal = zuuluu.exec;
            entity = argFoo;
            michal = michal.bind(zuuluu)(entity);
            tangon = null;
            if(!(tangon != michal)) { _fun00006_ip = 143; continue _fun00005 }
 52:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.hasSurrogates;
            zuuluu = 0;
            entity = michal[zuuluu];
            report = report.bind(oscard)(entity);
            entity = null;
            if(report) { _fun00006_ip = 146; continue _fun00005 }
 99:
            report = global;
            oscard = report.JSON;
            report = oscard.stringify;
            zuuluu = michal[zuuluu];
            oscard = report.bind(oscard)(zuuluu);
            report = oscard.includes;
            zuuluu = '\\ud';
            zuuluu = report.bind(oscard)(zuuluu);
            entity = null;
            if(zuuluu) { _fun00006_ip = 146; continue _fun00005 }
 143:
            entity = michal;
 146:
            return entity;
 148:
            entity = null;
            return entity;
        }
    };
    tangon['match'] = option;
    michal['escape'] = tangon;
    tangon = {};
    option = 3;
    option = oscard[option];
    option = verify.bind(entity)(option);
    option = option.defaultRules;
    romeon = option.escape;
    foxtra = tangon;
    option = copyDataProperties(foxtra, romeon);
    option = 'requiredFirstCharacters';
    tangon[option] = entity;
    offset = function(argFoo) { // Original name: match
        zuuluu = _closure1_slot4;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    option = 'match';
    tangon[option] = offset;
    michal['invisibleUnicode'] = tangon;
    tangon = {};
    option = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = argBaz;
            michal = entity.nested;
            if(michal) { _fun00008_ip = 112; continue _fun00007 }
 15:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 2;
            michal = report[michal];
            oscard = undefined;
            golfie = tangon.bind(oscard)(michal);
            report = golfie.maybeTranslateSurrogatesToInlineEmoji;
            tangon = 0;
            michal = zuuluu[tangon];
            report = report.bind(golfie)(michal);
            michal = null;
            if(!(michal != report)) { _fun00008_ip = 97; continue _fun00007 }
 63:
            michal = {};
            verify = michal;
            option = entity;
            entity = copyDataProperties(verify, option);
            golfie = true;
            entity = 'nested';
            michal[entity] = golfie;
            entity = argBar;
            entity = entity.bind(oscard)(report, michal);
            _fun00008_ip = 110; continue _fun00007;
 97:
            michal = {};
            tangon = zuuluu[tangon];
            michal['content'] = tangon;
            entity = michal;
 110:
            return entity;
 112:
            entity = {};
            michal = 0;
            michal = zuuluu[michal];
            entity['content'] = michal;
            return entity;
        }
    };
    tangon['parse'] = option;
    michal['text'] = tangon;
    tangon = {};
    option = function(argFoo) { // Original name: parse
        tangon = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.convertNameToSurrogate;
        entity = 1;
        entity = tangon[entity];
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        zuuluu = 'emoji';
        entity['type'] = zuuluu;
        zuuluu = 0;
        zuuluu = tangon[zuuluu];
        entity['content'] = zuuluu;
        entity['surrogate'] = michal;
        return entity;
    };
    tangon['parse'] = option;
    michal['emoji'] = tangon;
    tangon = {};
    option = 4;
    offset = oscard[option];
    offset = verify.bind(entity)(offset);
    offset = offset.order;
    tangon['order'] = offset;
    offset = ['<'];
    tangon['requiredFirstCharacters'] = offset;
    offset = function(argFoo) { // Original name: match
        zuuluu = /^<(a)?:(\w+):(\d+)>/;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['match'] = offset;
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu[Symbol.iterator];
            zuuluu = entity().next;
            michal = zuuluu().value;
            michal = entity;
            golfie = undefined;
            michal = michal === golfie;
            romeon = undefined;
            if(michal) { _fun00010_ip = 49; continue _fun00009 }
 24:
            report = zuuluu().value;
            tangon = entity;
            tangon = tangon === golfie;
            romeon = undefined;
            michal = tangon;
            if(tangon) { _fun00010_ip = 49; continue _fun00009 }
 43:
            romeon = report;
            michal = tangon;
 49:
            report = undefined;
            if(michal) { _fun00010_ip = 79; continue _fun00009 }
 54:
            oscard = zuuluu().value;
            tangon = entity;
            tangon = tangon === golfie;
            report = undefined;
            michal = tangon;
            if(tangon) { _fun00010_ip = 79; continue _fun00009 }
 73:
            report = oscard;
            michal = tangon;
 79:
            oscard = undefined;
            if(michal) { _fun00010_ip = 109; continue _fun00009 }
 84:
            tangon = zuuluu().value;
            zuuluu = entity;
            zuuluu = zuuluu === golfie;
            oscard = undefined;
            michal = zuuluu;
            if(zuuluu) { _fun00010_ip = 109; continue _fun00009 }
 103:
            oscard = tangon;
            michal = zuuluu;
 109:
            if(michal) { _fun00010_ip = 115; continue _fun00009 }
 112:
            entity.return();
 115:
            entity = argBaz;
            tangon = entity.disableAnimatedEmoji;
            if(!(tangon === golfie)) { _fun00010_ip = 130; continue _fun00009 }
 128:
            tangon = false;
 130:
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 5;
            zuuluu = option[entity];
            offset = michal.bind(golfie)(zuuluu);
            verify = offset.getEmojiURL;
            zuuluu = {};
            zuuluu['id'] = oscard;
            yankee = 'a';
            yankee = yankee === romeon;
            zuuluu['animated'] = yankee;
            yankee = 48;
            zuuluu['size'] = yankee;
            zuuluu = verify.bind(offset)(zuuluu);
            entity = option[entity];
            golfie = michal.bind(golfie)(entity);
            michal = golfie.getEmojiURL;
            entity = {'id': null, 'animated': false, 'size': 48};
            entity['id'] = oscard;
            michal = michal.bind(golfie)(entity);
            entity = {};
            entity['id'] = oscard;
            entity['alt'] = report;
            if(!tangon) { _fun00010_ip = 243; continue _fun00009 }
 240:
            zuuluu = michal;
 243:
            entity['src'] = zuuluu;
            entity['frozenSrc'] = michal;
            return entity;
        }
    };
    tangon['parse'] = offset;
    michal['customEmoji'] = tangon;
    tangon = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        michal = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 6;
        entity = tangon[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        golfie = entity.channelMention;
        oscard = golfie.parse;
        report = argFoo;
        michal = argBar;
        entity = argBaz;
        michal = oscard.bind(golfie)(report, michal, entity);
        entity = {};
        offset = entity;
        verify = michal;
        report = copyDataProperties(offset, verify);
        zuuluu = _closure1_slot5;
        report = michal.content;
        oscard = zuuluu.bind(tangon)(report);
        report = 'content';
        entity[report] = oscard;
        michal = michal.inContent;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = 'inContent';
        entity[michal] = zuuluu;
        return entity;
    };
    tangon['parse'] = offset;
    michal['channelMention'] = tangon;
    tangon = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        michal = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 6;
        entity = tangon[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        golfie = entity.channelOrMessageUrl;
        oscard = golfie.parse;
        report = argFoo;
        michal = argBar;
        entity = argBaz;
        michal = oscard.bind(golfie)(report, michal, entity);
        entity = {};
        offset = entity;
        verify = michal;
        report = copyDataProperties(offset, verify);
        zuuluu = _closure1_slot5;
        report = michal.content;
        oscard = zuuluu.bind(tangon)(report);
        report = 'content';
        entity[report] = oscard;
        michal = michal.inContent;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = 'inContent';
        entity[michal] = zuuluu;
        return entity;
    };
    tangon['parse'] = offset;
    michal['channelOrMessageUrl'] = tangon;
    tangon = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        michal = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 6;
        entity = tangon[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        golfie = entity.mediaPostLink;
        oscard = golfie.parse;
        report = argFoo;
        michal = argBar;
        entity = argBaz;
        michal = oscard.bind(golfie)(report, michal, entity);
        entity = {};
        offset = entity;
        verify = michal;
        report = copyDataProperties(offset, verify);
        zuuluu = _closure1_slot5;
        report = michal.content;
        oscard = zuuluu.bind(tangon)(report);
        report = 'content';
        entity[report] = oscard;
        michal = michal.inContent;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = 'inContent';
        entity[michal] = zuuluu;
        return entity;
    };
    tangon['parse'] = offset;
    michal['mediaPostLink'] = tangon;
    tangon = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        report = entity.attachmentLink;
        tangon = report.parse;
        zuuluu = argFoo;
        michal = argBar;
        entity = argBaz;
        entity = tangon.bind(report)(zuuluu, michal, entity);
        return entity;
    };
    tangon['parse'] = offset;
    michal['attachmentLink'] = tangon;
    tangon = {};
    option = oscard[option];
    option = verify.bind(entity)(option);
    option = option.order;
    tangon['order'] = option;
    option = ['@'];
    tangon['requiredFirstCharacters'] = option;
    option = function(argFoo) { // Original name: match
        zuuluu = /^(@silent(?![^\s]))/;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['match'] = option;
    golfie = function(argFoo) { // Original name: parse
        entity = {};
        michal = 'text';
        entity['type'] = michal;
        zuuluu = argFoo;
        michal = 0;
        michal = zuuluu[michal];
        entity['content'] = michal;
        return entity;
    };
    tangon['parse'] = golfie;
    michal['silentPrefix'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/PlatformMarkupRules.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();