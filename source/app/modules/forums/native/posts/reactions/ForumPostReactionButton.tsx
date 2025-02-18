// app/modules/forums/native/posts/reactions/ForumPostReactionButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    backup = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: BurstReactionButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtra = entity.colors;
            romeon = entity.emoji;
            verify = entity.onPress;
            option = entity.onLongPress;
            sizing = entity.containerStyle;
            yankee = entity.count;
            golfie = entity.emojiSize;
            backup = entity.selected;
            offset = entity.animate;
            oscard = entity.animateCount;
            report = entity.accessible;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 14;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useEmojiColorPalette;
            zuuluu = michal.bind(zuuluu)(foxtra);
            kiloes = {};
            michal = null;
            output = michal != zuuluu;
            echoed = '';
            foxtra = echoed;
            if(!output) { _fun00002_ip = 213; continue _fun00001 }
 120:
            result = _closure1_slot0;
            update = _closure1_slot2;
            output = 15;
            output = update[output];
            source = result.bind(tangon)(output);
            update = source.hex2rgb;
            output = michal == zuuluu;
            result = undefined;
            if(output) { _fun00002_ip = 160; continue _fun00001 }
 155:
            result = zuuluu.backgroundColor;
 160:
            output = michal == zuuluu;
            ctrled = undefined;
            if(output) { _fun00002_ip = 174; continue _fun00001 }
 169:
            ctrled = zuuluu.opacity;
 174:
            vacuum = michal != ctrled;
            output = 0.15;
            if(!vacuum) { _fun00002_ip = 194; continue _fun00001 }
 191:
            output = ctrled;
 194:
            output = update.bind(source)(result, output);
            result = michal != output;
            foxtra = echoed;
            if(!result) { _fun00002_ip = 213; continue _fun00001 }
 210:
            foxtra = output;
 213:
            kiloes['backgroundColor'] = foxtra;
            output = michal == zuuluu;
            foxtra = undefined;
            if(output) { _fun00002_ip = 231; continue _fun00001 }
 226:
            foxtra = zuuluu.backgroundColor;
 231:
            kiloes['borderColor'] = foxtra;
            foxtra = 0;
            if(!backup) { _fun00002_ip = 245; continue _fun00001 }
 241:
            foxtra = _closure1_slot7;
 245:
            kiloes['borderWidth'] = foxtra;
            foxtra = {};
            backup = michal == zuuluu;
            michal = undefined;
            if(backup) { _fun00002_ip = 267; continue _fun00001 }
 261:
            michal = zuuluu.accentColor;
 267:
            foxtra['color'] = michal;
            zuuluu = _closure1_slot6;
            michal = _closure1_slot10;
            entity = {};
            backup = new Array(2);
            backup[0] = sizing;
            backup[1] = kiloes;
            entity['containerStyle'] = backup;
            entity['textStyle'] = foxtra;
            foxtra = false;
            entity['selected'] = foxtra;
            entity['emoji'] = romeon;
            entity['count'] = yankee;
            entity['animate'] = offset;
            entity['onPress'] = verify;
            entity['onLongPress'] = option;
            entity['emojiSize'] = golfie;
            entity['animateCount'] = oscard;
            entity['accessible'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    michal = function(argFoo) { // Original name: ReactionButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.emoji;
            option = entity.onPress;
            golfie = entity.onLongPress;
            kiloes = entity.textStyle;
            ctrled = entity.containerStyle;
            backup = entity.count;
            sizing = entity.emojiSize;
            update = entity.selected;
            result = entity.animate;
            foxtra = entity.animateCount;
            output = entity.accessible;
            report = entity.disabled;
            tangon = undefined;
            if(!(report === tangon)) { _fun00004_ip = 80; continue _fun00003 }
 78:
            report = false;
 80:
            entity = _closure1_slot8;
            yankee = entity.bind(tangon)();
            entity = verify.id;
            oscard = null;
            entity = oscard != entity;
            romeon = undefined;
            if(!entity) { _fun00004_ip = 167; continue _fun00003 }
 107:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 16;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.getEmojiURL;
            entity = {};
            echoed = verify.id;
            entity['id'] = echoed;
            if(!result) { _fun00004_ip = 153; continue _fun00003 }
 147:
            result = verify.animated;
 153:
            entity['animated'] = result;
            entity['size'] = sizing;
            romeon = michal.bind(zuuluu)(entity);
 167:
            source = undefined;
            if(!update) { _fun00004_ip = 178; continue _fun00003 }
 172:
            source = yankee.selected;
 178:
            zuuluu = _closure1_slot5;
            result = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 7;
            entity = sizing[entity];
            entity = result.bind(tangon)(entity);
            michal = entity.PressableOpacity;
            entity = {};
            vacuum = yankee.container;
            echoed = new Array(3);
            echoed[0] = vacuum;
            echoed[1] = ctrled;
            echoed[2] = source;
            entity['style'] = echoed;
            entity['accessible'] = output;
            output = 17;
            output = sizing[output];
            echoed = result.bind(tangon)(output);
            result = echoed.getAccessibleEmojiDisplayName;
            sequen = false;
            papara = echoed;
            cntext = update;
            record = backup;
            config = verify;
            output = papara[result](cntext, record, config, sequen, vacuum);
            entity['accessibilityLabel'] = output;
            entity['onPress'] = option;
            entity['onLongPress'] = golfie;
            entity['disabled'] = report;
            option = _closure1_slot6;
            golfie = _closure1_slot1;
            report = 18;
            report = sizing[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            sizing = yankee.textEmoji;
            report['textEmojiStyle'] = sizing;
            sizing = yankee.imageEmoji;
            report['fastImageStyle'] = sizing;
            report['src'] = romeon;
            verify = verify.name;
            report['name'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            oscard = oscard != backup;
            if(!oscard) { _fun00004_ip = 378; continue _fun00003 }
 372:
            golfie = 0;
            oscard = backup > golfie;
 378:
            if(!oscard) { _fun00004_ip = 457; continue _fun00003 }
 381:
            verify = _closure1_slot6;
            option = _closure1_slot4;
            golfie = {};
            yankee = yankee.countContainer;
            golfie['style'] = yankee;
            romeon = _closure1_slot6;
            yankee = _closure1_slot1;
            sizing = _closure1_slot2;
            offset = 19;
            offset = sizing[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            offset['textStyle'] = kiloes;
            offset['count'] = backup;
            offset['animate'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 457:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot10 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    verify = option[entity];
    oscard = argCor;
    entity = undefined;
    oscard = oscard.bind(entity)(verify);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.View;
    var _closure1_slot4 = oscard;
    oscard = 2;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.jsxs;
    var _closure1_slot5 = verify;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot6 = oscard;
    foxtra = 1.5;
    var _closure1_slot7 = foxtra;
    oscard = 3;
    oscard = option[oscard];
    offset = golfie.bind(entity)(oscard);
    verify = offset.createStyles;
    oscard = {};
    yankee = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 8, 'borderRadius': null, 'borderWidth': 1.5, 'borderColor': null, 'backgroundColor': null, 'minWidth': 32, 'minHeight': 26, 'maxHeight': 26};
    romeon = 4;
    kiloes = option[romeon];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.sm;
    yankee['borderRadius'] = kiloes;
    kiloes = option[romeon];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_MOD_SUBTLE;
    yankee['borderColor'] = kiloes;
    kiloes = option[romeon];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_MOD_SUBTLE;
    yankee['backgroundColor'] = kiloes;
    oscard['container'] = yankee;
    yankee = {};
    kiloes = option[romeon];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.unsafe_rawColors;
    kiloes = kiloes.BRAND_560;
    yankee['borderColor'] = kiloes;
    yankee['borderWidth'] = foxtra;
    foxtra = 5;
    foxtra = option[foxtra];
    sizing = golfie.bind(entity)(foxtra);
    kiloes = sizing.hexWithOpacity;
    foxtra = option[romeon];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    backup = foxtra.BRAND_500;
    foxtra = 0.3;
    foxtra = kiloes.bind(sizing)(backup, foxtra);
    yankee['backgroundColor'] = foxtra;
    oscard['selected'] = yankee;
    yankee = {};
    foxtra = 12;
    yankee['fontSize'] = foxtra;
    oscard['textEmoji'] = yankee;
    yankee = {'height': 16, 'width': 16};
    oscard['imageEmoji'] = yankee;
    yankee = {};
    yankee['paddingStart'] = romeon;
    oscard['countContainer'] = yankee;
    oscard = verify.bind(offset)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 20;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/forums/native/posts/reactions/ForumPostReactionButton.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = 14;
    zuuluu['DEFAULT_EMOJI_SIZE'] = oscard;
    oscard = function(argFoo) { // Original name: AdditionalReactionCount
        entity = argFoo;
        verify = entity.count;
        zuuluu = entity.threadId;
        yankee = entity.containerStyle;
        entity = _closure1_slot8;
        tangon = undefined;
        offset = entity.bind(tangon)();
        michal = _closure1_slot1;
        option = _closure1_slot2;
        entity = 6;
        entity = option[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['threadId'] = zuuluu;
        entity = michal.bind(tangon)(entity);
        golfie = entity.onTapReactionCount;
        zuuluu = _closure1_slot6;
        oscard = _closure1_slot0;
        entity = 7;
        entity = option[entity];
        entity = oscard.bind(tangon)(entity);
        michal = entity.PressableOpacity;
        entity = {};
        romeon = true;
        entity['accessible'] = romeon;
        romeon = 8;
        foxtra = option[romeon];
        foxtra = oscard.bind(tangon)(foxtra);
        backup = foxtra.intl;
        foxtra = backup.string;
        romeon = option[romeon];
        romeon = oscard.bind(tangon)(romeon);
        romeon = romeon.t;
        romeon = romeon.N8hbZG;
        romeon = foxtra.bind(backup)(romeon);
        entity['accessibilityLabel'] = romeon;
        romeon = offset.container;
        offset = new Array(2);
        offset[0] = romeon;
        offset[1] = yankee;
        entity['style'] = offset;
        entity['onPress'] = golfie;
        golfie = _closure1_slot5;
        report = 9;
        report = option[report];
        report = oscard.bind(tangon)(report);
        oscard = report.Text;
        report = {'variant': 'heading-sm/medium', 'color': 'interactive-normal'};
        option = ['+'];
        option[1] = verify;
        report['children'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['AdditionalReactionCount'] = oscard;
    oscard = function(argFoo) { // Original name: AddReactionButton
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.threadId;
            verify = entity.containerStyle;
            michal = entity.reactionType;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00006_ip = 62; continue _fun00005 }
 27:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ReactionTypes;
            michal = entity.NORMAL;
 62:
            entity = _closure1_slot8;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 6;
            entity = romeon[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = {};
            entity['threadId'] = oscard;
            entity['reactionType'] = michal;
            entity = zuuluu.bind(tangon)(entity);
            oscard = entity.onTapAddReaction;
            yankee = _closure1_slot0;
            entity = 11;
            entity = romeon[entity];
            entity = yankee.bind(tangon)(entity);
            entity = entity.ADD_REACTION_ICON_COMPONENTS;
            golfie = entity[michal];
            zuuluu = _closure1_slot6;
            entity = 7;
            entity = romeon[entity];
            entity = yankee.bind(tangon)(entity);
            michal = entity.PressableOpacity;
            entity = {};
            offset = option.container;
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            entity['style'] = option;
            option = true;
            entity['accessible'] = option;
            option = 8;
            verify = romeon[option];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.t;
            option = option.lfIHs7;
            option = verify.bind(offset)(option);
            entity['accessibilityLabel'] = option;
            entity['onPress'] = oscard;
            oscard = _closure1_slot6;
            report = {};
            option = 'xs';
            report['size'] = option;
            report = oscard.bind(tangon)(golfie, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['AddReactionButton'] = oscard;
    report = function(argFoo) { // Original name: ForumPostReactionButton
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            romeon = entity.thread;
            foxtra = entity.reaction;
            var _closure2_slot0 = foxtra;
            oscard = entity.animateCount;
            offset = entity.containerStyle;
            verify = entity.textStyle;
            output = entity.locationAnalyticsObject;
            var _closure2_slot1 = output;
            option = entity.emojiSize;
            report = undefined;
            if(!(option === report)) { _fun00008_ip = 64; continue _fun00007 }
 61:
            option = 14;
 64:
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 12;
            entity = backup[entity];
            entity = yankee.bind(report)(entity);
            entity = entity.bind(report)(romeon);
            zuuluu = entity.disableReactionCreates;
            _closure2_slot2 = zuuluu;
            entity = entity.disableReactionUpdates;
            _closure2_slot3 = entity;
            golfie = 6;
            golfie = backup[golfie];
            yankee = yankee.bind(report)(golfie);
            golfie = {};
            romeon = romeon.id;
            golfie['threadId'] = romeon;
            golfie = yankee.bind(report)(golfie);
            yankee = golfie.onTapReaction;
            _closure2_slot4 = yankee;
            sizing = golfie.onLongTapReaction;
            _closure2_slot5 = sizing;
            romeon = _closure1_slot0;
            golfie = 13;
            golfie = backup[golfie];
            golfie = romeon.bind(report)(golfie);
            romeon = golfie.AnimateEmoji;
            golfie = romeon.useSetting;
            golfie = golfie.bind(romeon)();
            kiloes = _closure1_slot3;
            backup = kiloes.useCallback;
            romeon = new Array(5);
            romeon[0] = zuuluu;
            romeon[1] = entity;
            romeon[2] = output;
            romeon[3] = yankee;
            romeon[4] = foxtra;
            yankee = function() {
                zuuluu = _closure2_slot4;
                michal = {};
                tangon = _closure2_slot0;
                michal['reaction'] = tangon;
                tangon = _closure2_slot2;
                michal['disableReactionCreates'] = tangon;
                tangon = _closure2_slot3;
                michal['disableReactionUpdates'] = tangon;
                entity = _closure2_slot1;
                michal['locationAnalyticsObject'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            romeon = backup.bind(kiloes)(yankee, romeon);
            backup = kiloes.useCallback;
            yankee = new Array(2);
            yankee[0] = sizing;
            yankee[1] = foxtra;
            tangon = function() {
                zuuluu = _closure2_slot5;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            yankee = backup.bind(kiloes)(tangon, yankee);
            backup = !zuuluu;
            if(backup) { _fun00008_ip = 294; continue _fun00007 }
 291:
            backup = !entity;
 294:
            zuuluu = foxtra.burst_count;
            entity = 0;
            if(!(!(zuuluu > entity))) { _fun00008_ip = 394; continue _fun00007 }
 306:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot10;
            entity = {};
            entity['accessible'] = backup;
            kiloes = foxtra.emoji;
            entity['emoji'] = kiloes;
            kiloes = foxtra.me;
            entity['selected'] = kiloes;
            kiloes = foxtra.count;
            entity['count'] = kiloes;
            entity['onPress'] = romeon;
            entity['onLongPress'] = yankee;
            entity['containerStyle'] = offset;
            entity['textStyle'] = verify;
            entity['emojiSize'] = option;
            entity['animate'] = golfie;
            entity['animateCount'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 501; continue _fun00007;
 394:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot9;
            michal = {};
            michal['accessible'] = backup;
            backup = foxtra.emoji;
            michal['emoji'] = backup;
            backup = foxtra.me_burst;
            michal['selected'] = backup;
            backup = foxtra.burst_colors;
            kiloes = null;
            if(!(kiloes == backup)) { _fun00008_ip = 447; continue _fun00007 }
 443:
            backup = new Array(0);
 447:
            michal['colors'] = backup;
            foxtra = foxtra.burst_count;
            michal['count'] = foxtra;
            michal['onPress'] = romeon;
            michal['onLongPress'] = yankee;
            michal['containerStyle'] = offset;
            michal['textStyle'] = verify;
            michal['emojiSize'] = option;
            michal['animate'] = golfie;
            michal['animateCount'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 501:
            return entity;
        }
    };
    zuuluu['ForumPostReactionButton'] = report;
    zuuluu['BurstReactionButton'] = tangon;
    zuuluu['ReactionButton'] = michal;
    return entity;
})();