// app/modules/guild_onboarding/native/GuildOnboardingPrompt.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: PromptHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.currentPrompt;
            result = entity.numberOfPrompts;
            update = entity.currentPromptIndex;
            entity = _closure1_slot18;
            tangon = undefined;
            offset = entity.bind(tangon)();
            zuuluu = _closure1_slot16;
            michal = _closure1_slot17;
            entity = {};
            golfie = _closure1_slot6;
            report = {};
            option = offset.promptHeader;
            report['style'] = option;
            foxtra = _closure1_slot15;
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = 23;
            option = backup[yankee];
            option = kiloes.bind(tangon)(option);
            romeon = option.Text;
            option = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
            sizing = offset.countText;
            option['style'] = sizing;
            sequen = 24;
            sizing = backup[sequen];
            sizing = kiloes.bind(tangon)(sizing);
            output = sizing.intl;
            sizing = output.format;
            backup = backup[sequen];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.t;
            kiloes = backup.isV0NT;
            backup = {};
            echoed = 1;
            echoed = update + echoed;
            backup['currentQuestion'] = echoed;
            backup['questionCount'] = result;
            backup = sizing.bind(output)(kiloes, backup);
            option['children'] = backup;
            romeon = foxtra.bind(tangon)(romeon, option);
            option = new Array(2);
            option[0] = romeon;
            backup = null;
            foxtra = backup != verify;
            romeon = null;
            if(!foxtra) { _fun00002_ip = 388; continue _fun00001 }
 220:
            foxtra = verify.required;
            romeon = null;
            if(!foxtra) { _fun00002_ip = 388; continue _fun00001 }
 234:
            kiloes = _closure1_slot16;
            backup = _closure1_slot17;
            foxtra = {};
            result = _closure1_slot15;
            output = _closure1_slot6;
            sizing = {};
            echoed = offset.requiredSeparator;
            sizing['style'] = echoed;
            output = result.bind(tangon)(output, sizing);
            sizing = new Array(2);
            sizing[0] = output;
            echoed = _closure1_slot15;
            vacuum = _closure1_slot0;
            update = _closure1_slot2;
            output = update[yankee];
            output = vacuum.bind(tangon)(output);
            result = output.Text;
            output = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            source = update[sequen];
            source = vacuum.bind(tangon)(source);
            ctrled = source.intl;
            source = ctrled.string;
            update = update[sequen];
            update = vacuum.bind(tangon)(update);
            update = update.t;
            update = update.Ur8Vrq;
            update = source.bind(ctrled)(update);
            output['children'] = update;
            output = echoed.bind(tangon)(result, output);
            sizing[1] = output;
            foxtra['children'] = sizing;
            romeon = kiloes.bind(tangon)(backup, foxtra);
 388:
            option[1] = romeon;
            report['children'] = option;
            golfie = zuuluu.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot15;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[yankee];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            offset = offset.title;
            oscard['style'] = offset;
            verify = verify.title;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: PromptFooter
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.guildId;
            var _closure2_slot0 = michal;
            option = zuuluu.currentPrompt;
            michal = zuuluu.selectedOptionIds;
            var _closure2_slot1 = michal;
            foxtra = zuuluu.handleOnPress;
            echoed = zuuluu.lastPrompt;
            tangon = undefined;
            var _closure2_slot2 = tangon;
            zuuluu = _closure1_slot18;
            output = zuuluu.bind(tangon)();
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 17;
            zuuluu = oscard[zuuluu];
            golfie = report.bind(tangon)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot11;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot11;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = oscard.bind(golfie)(report, zuuluu);
            zuuluu = michal.length;
            verify = 0;
            result = verify === zuuluu;
            if(!result) { _fun00004_ip = 139; continue _fun00003 }
 121:
            zuuluu = null;
            zuuluu = zuuluu != option;
            if(!zuuluu) { _fun00004_ip = 136; continue _fun00003 }
 130:
            zuuluu = option.required;
 136:
            result = !zuuluu;
 139:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 24;
            report = yankee[zuuluu];
            report = golfie.bind(tangon)(report);
            oscard = report.intl;
            report = oscard.string;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            if(echoed) { _fun00004_ip = 215; continue _fun00003 }
 186:
            if(result) { _fun00004_ip = 202; continue _fun00003 }
 189:
            golfie = zuuluu.PDTjLC;
            backup = report.bind(oscard)(golfie);
            _fun00004_ip = 213; continue _fun00003;
 202:
            golfie = zuuluu.5WxrcX;
            backup = report.bind(oscard)(golfie);
 213:
            _fun00004_ip = 255; continue _fun00003;
 215:
            zuuluu = zuuluu.8SuVoK;
            golfie = report.bind(oscard)(zuuluu);
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            oscard = zuuluu.concat;
            report = '';
            zuuluu = ' 🎉';
            backup = oscard.bind(report)(golfie, zuuluu);
 255:
            michal = michal.length;
            sizing = verify === michal;
            if(!sizing) { _fun00004_ip = 287; continue _fun00003 }
 267:
            michal = null;
            zuuluu = michal == option;
            michal = undefined;
            if(zuuluu) { _fun00004_ip = 284; continue _fun00003 }
 278:
            michal = option.required;
 284:
            sizing = michal;
 287:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 19;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.bind(tangon)();
            yankee = null;
            michal = yankee == option;
            kiloes = undefined;
            if(michal) { _fun00004_ip = 351; continue _fun00003 }
 322:
            oscard = option.options;
            michal = yankee == oscard;
            kiloes = undefined;
            if(michal) { _fun00004_ip = 351; continue _fun00003 }
 336:
            report = oscard.filter;
            michal = function(argFoo) {
                zuuluu = _closure2_slot1;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            kiloes = report.bind(oscard)(michal);
 351:
            _closure2_slot2 = kiloes;
            golfie = _closure1_slot4;
            oscard = golfie.useMemo;
            report = new Array(1);
            report[0] = kiloes;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00006_ip = 43; continue _fun00005 }
 13:
                    entity = global;
                    entity = entity.Set;
                    zuuluu = entity.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
                    golfie = zuuluu;
                    entity = new golfie[entity](oscard);
                    entity = entity instanceof Object ? entity : zuuluu;
                    _fun00006_ip = 83; continue _fun00005;
 43:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 29;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.getSelectedRoleIds;
                    michal = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(michal);
 83:
                    return entity;
                }
            };
            golfie = oscard.bind(golfie)(michal, report);
            oscard = _closure1_slot4;
            report = oscard.useMemo;
            michal = new Array(1);
            michal[0] = kiloes;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00008_ip = 43; continue _fun00007 }
 13:
                    entity = global;
                    entity = entity.Set;
                    zuuluu = entity.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
                    golfie = zuuluu;
                    entity = new golfie[entity](oscard);
                    entity = entity instanceof Object ? entity : zuuluu;
                    _fun00008_ip = 83; continue _fun00007;
 43:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 29;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.getSelectedChannelIds;
                    michal = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(michal);
 83:
                    return entity;
                }
            };
            oscard = report.bind(oscard)(entity, michal);
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 30;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['guild'] = romeon;
            entity['prompt'] = option;
            entity['selectedRoleIds'] = golfie;
            entity['selectedChannelIds'] = oscard;
            oscard = _closure1_slot21;
            entity['itemHook'] = oscard;
            entity = michal.bind(tangon)(entity);
            ctrled = entity.helpText;
            source = entity.helpTextAdditional;
            michal = _closure1_slot0;
            entity = 20;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.isThemeDark;
            option = entity.bind(michal)(zuuluu);
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 15;
            entity = report[entity];
            golfie = michal.bind(tangon)(entity);
            oscard = golfie.hexWithOpacity;
            zuuluu = _closure1_slot1;
            michal = 13;
            entity = report[michal];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.unsafe_rawColors;
            if(option) { _fun00004_ip = 601; continue _fun00003 }
 555:
            option = entity.PRIMARY_130;
            romeon = oscard.bind(golfie)(option, verify);
            option = new Array(2);
            option[0] = romeon;
            romeon = report[michal];
            romeon = zuuluu.bind(tangon)(romeon);
            romeon = romeon.unsafe_rawColors;
            romeon = romeon.PRIMARY_130;
            option[1] = romeon;
            _fun00004_ip = 648; continue _fun00003;
 601:
            entity = entity.PRIMARY_600;
            oscard = oscard.bind(golfie)(entity, verify);
            entity = new Array(2);
            entity[0] = oscard;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.unsafe_rawColors;
            michal = michal.PRIMARY_600;
            entity[1] = michal;
            option = entity;
 648:
            zuuluu = _closure1_slot16;
            michal = _closure1_slot6;
            entity = {};
            report = output.footer;
            entity['style'] = report;
            golfie = _closure1_slot15;
            oscard = _closure1_slot1;
            kiloes = _closure1_slot2;
            report = 27;
            report = kiloes[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            romeon = output.scrollContainerGradient;
            verify = new Array(1);
            verify[0] = romeon;
            report['style'] = verify;
            romeon = _closure1_slot0;
            verify = 28;
            update = kiloes[verify];
            update = romeon.bind(tangon)(update);
            update = update.VerticalGradient;
            update = update.START;
            report['start'] = update;
            verify = kiloes[verify];
            verify = romeon.bind(tangon)(verify);
            verify = verify.VerticalGradient;
            verify = verify.END;
            report['end'] = verify;
            report['colors'] = option;
            option = 'none';
            report['pointerEvents'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot16;
            golfie = _closure1_slot6;
            oscard = {};
            verify = output.footerContent;
            oscard['style'] = verify;
            verify = '';
            if(!(verify === ctrled)) { _fun00004_ip = 830; continue _fun00003 }
 824:
            yankee = null;
            if(!(verify !== source)) { _fun00004_ip = 915; continue _fun00003 }
 830:
            kiloes = _closure1_slot16;
            romeon = _closure1_slot0;
            update = _closure1_slot2;
            verify = 23;
            verify = update[verify];
            verify = romeon.bind(tangon)(verify);
            romeon = verify.Text;
            verify = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            update = output.helpText;
            verify['style'] = update;
            update = new Array(3);
            update[0] = ctrled;
            ctrled = ' ';
            update[1] = ctrled;
            update[2] = source;
            verify['children'] = update;
            yankee = kiloes.bind(tangon)(romeon, verify);
 915:
            verify = new Array(2);
            verify[0] = yankee;
            romeon = _closure1_slot15;
            yankee = _closure1_slot1;
            kiloes = _closure1_slot2;
            offset = 25;
            offset = kiloes[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            update = output.footerButtonText;
            kiloes = new Array(2);
            kiloes[0] = update;
            update = sizing;
            if(!sizing) { _fun00004_ip = 975; continue _fun00003 }
 969:
            update = output.buttonTextDisabled;
 975:
            kiloes[1] = update;
            offset['textStyle'] = kiloes;
            update = output.footerButton;
            kiloes = new Array(3);
            kiloes[0] = update;
            if(!result) { _fun00004_ip = 1004; continue _fun00003 }
 1001:
            result = !echoed;
 1004:
            if(!result) { _fun00004_ip = 1013; continue _fun00003 }
 1007:
            result = output.buttonSkip;
 1013:
            kiloes[1] = result;
            if(!sizing) { _fun00004_ip = 1026; continue _fun00003 }
 1020:
            sizing = output.buttonDisabled;
 1026:
            kiloes[2] = sizing;
            offset['style'] = kiloes;
            offset['text'] = backup;
            offset['onPress'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: formattedNameHighlight
        report = _closure1_slot15;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 23;
        entity = zuuluu[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        zuuluu = entity.Text;
        michal = {'variant': 'text-xs/medium', 'color': 'header-primary'};
        entity = argFoo;
        michal['children'] = entity;
        entity = argBar;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: DropdownOption
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            verify = michal.option;
            var _closure2_slot0 = verify;
            michal = _closure1_slot18;
            tangon = undefined;
            foxtra = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            backup = _closure1_slot2;
            michal = 17;
            michal = backup[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.useStateFromStores;
            golfie = _closure1_slot9;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = entity.emoji;
                    oscard = null;
                    zuuluu = oscard == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00012_ip = 29; continue _fun00011 }
 24:
                    entity = michal.id;
 29:
                    michal = oscard != entity;
                    entity = null;
                    if(!michal) { _fun00012_ip = 80; continue _fun00011 }
 38:
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.getUsableCustomEmojiById;
                    report = _closure2_slot0;
                    report = report.emoji;
                    oscard = oscard == report;
                    tangon = undefined;
                    if(oscard) { _fun00012_ip = 75; continue _fun00011 }
 70:
                    tangon = report.id;
 75:
                    entity = michal.bind(zuuluu)(tangon);
 80:
                    return entity;
                }
            };
            result = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot16;
            michal = _closure1_slot6;
            entity = {};
            report = foxtra.dropdownPill;
            entity['style'] = report;
            option = _closure1_slot15;
            golfie = _closure1_slot6;
            report = {};
            offset = foxtra.emojiContainer;
            report['style'] = offset;
            romeon = _closure1_slot15;
            yankee = _closure1_slot1;
            offset = 32;
            offset = backup[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            backup = foxtra.optionTextEmoji;
            offset['textEmojiStyle'] = backup;
            foxtra = foxtra.optionImageEmoji;
            offset['fastImageStyle'] = foxtra;
            foxtra = null;
            kiloes = foxtra != result;
            backup = undefined;
            if(!kiloes) { _fun00010_ip = 232; continue _fun00009 }
 171:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 33;
            kiloes = output[kiloes];
            output = sizing.bind(tangon)(kiloes);
            sizing = output.getEmojiURL;
            kiloes = {};
            echoed = result.id;
            kiloes['id'] = echoed;
            result = result.animated;
            kiloes['animated'] = result;
            result = _closure1_slot14;
            kiloes['size'] = result;
            backup = sizing.bind(output)(kiloes);
 232:
            offset['src'] = backup;
            kiloes = verify.emoji;
            sizing = foxtra == kiloes;
            backup = undefined;
            if(sizing) { _fun00010_ip = 257; continue _fun00009 }
 252:
            backup = kiloes.name;
 257:
            kiloes = foxtra != backup;
            foxtra = '';
            if(!kiloes) { _fun00010_ip = 271; continue _fun00009 }
 268:
            foxtra = backup;
 271:
            offset['name'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            report['children'] = offset;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot15;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 23;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {};
            offset = 'text-md/semibold';
            oscard['variant'] = offset;
            verify = verify.title;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    offset = 1;
    golfie = oscard[offset];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Image;
    var _closure1_slot5 = golfie;
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    golfie = tangon.ScrollView;
    var _closure1_slot7 = golfie;
    tangon = tangon.FlatList;
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildOnboardingModalStates;
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMOJI_URL_BASE_SIZE;
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.Fonts;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot15 = golfie;
    golfie = tangon.jsxs;
    var _closure1_slot16 = golfie;
    tangon = tangon.Fragment;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['flex'] = offset;
    tangon['flex'] = verify;
    verify = {'display': 'flex', 'flex': 1, 'flexGrow': 1, 'marginTop': null, 'marginBottom': 16};
    offset = 12;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.NAV_BAR_HEIGHT;
    verify['marginTop'] = offset;
    romeon = 16;
    offset = 13;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = backup;
    tangon['container'] = verify;
    verify = {'display': 'flex', 'flexGrow': 1, 'justifyContent': 'center', 'paddingHorizontal': 16, 'paddingTop': 0};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = backup;
    tangon['scrollContainer'] = verify;
    verify = {'position': 'absolute', 'height': 48, 'width': '100%', 'left': 0, 'top': 4294967248};
    tangon['scrollContainerGradient'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    tangon['promptHeader'] = verify;
    verify = {'flexShrink': 0, 'marginHorizontal': 8, 'color': null, 'backgroundColor': null, 'width': 4, 'height': 4};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    verify['color'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    verify['backgroundColor'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tangon['requiredSeparator'] = verify;
    verify = {};
    tangon['countText'] = verify;
    verify = {};
    backup = 32;
    verify['marginBottom'] = backup;
    tangon['title'] = verify;
    verify = {'marginTop': 8, 'marginBottom': 8, 'textAlign': 'center'};
    tangon['helpText'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'bottom': 0, 'paddingBottom': 8, 'position': 'absolute', 'width': '100%'};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = backup;
    tangon['footer'] = verify;
    verify = {};
    verify['flexGrow'] = entity;
    backup = 44;
    verify['height'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    verify['borderRadius'] = backup;
    tangon['footerButton'] = verify;
    verify = {};
    backup = 14;
    backup = oscard[backup];
    kiloes = yankee.bind(entity)(backup);
    backup = foxtra.PRIMARY_SEMIBOLD;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.WHITE_500;
    result = kiloes.bind(entity)(backup, foxtra, romeon);
    echoed = verify;
    foxtra = copyDataProperties(echoed, result);
    tangon['footerButtonText'] = verify;
    verify = {'paddingHorizontal': 16, 'paddingBottom': 8, 'paddingTop': 8};
    tangon['footerText'] = verify;
    verify = {'width': '100%', 'paddingHorizontal': 16};
    tangon['footerContent'] = verify;
    verify = {};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_ACCENT;
    verify['backgroundColor'] = foxtra;
    tangon['buttonSkip'] = verify;
    verify = {};
    foxtra = 15;
    foxtra = oscard[foxtra];
    sizing = report.bind(entity)(foxtra);
    kiloes = sizing.hexWithOpacity;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    backup = foxtra.BRAND_500;
    foxtra = 0.6;
    backup = kiloes.bind(sizing)(backup, foxtra);
    verify['backgroundColor'] = backup;
    tangon['buttonDisabled'] = verify;
    verify = {};
    verify['opacity'] = foxtra;
    tangon['buttonTextDisabled'] = verify;
    verify = {'fontSize': 18, 'lineHeight': 22, 'marginRight': 6};
    tangon['optionTextEmoji'] = verify;
    verify = {'height': 22, 'width': 22, 'marginRight': 6};
    tangon['optionImageEmoji'] = verify;
    verify = {'display': 'flex', 'alignItems': 'center'};
    tangon['emojiContainer'] = verify;
    verify = {'borderRadius': null, 'backgroundColor': null, 'padding': 8, 'paddingRight': 32, 'minHeight': 48, 'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'position': 'relative'};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    verify['borderRadius'] = foxtra;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = foxtra;
    tangon['dropdownContainer'] = verify;
    verify = {};
    verify['marginTop'] = romeon;
    tangon['emptyDropdownText'] = verify;
    verify = {'borderRadius': null, 'backgroundColor': null, 'padding': 6, 'marginRight': 8, 'marginTop': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    verify['borderRadius'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tangon['dropdownPill'] = verify;
    verify = {'position': 'absolute', 'right': 4, 'top': 8};
    tangon['dropdownIconContainer'] = verify;
    verify = {'height': 32, 'width': 32};
    tangon['dropdownIcon'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 39;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/native/GuildOnboardingPrompt.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: RulesPrompt
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            entity = entity.guildId;
            var _closure2_slot0 = entity;
            entity = _closure1_slot18;
            report = undefined;
            yankee = entity.bind(report)();
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 16;
            entity = oscard[entity];
            michal = zuuluu.bind(report)(entity);
            entity = michal.useNavigation;
            entity = entity.bind(michal)();
            var _closure2_slot1 = entity;
            option = 17;
            entity = oscard[option];
            offset = zuuluu.bind(report)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot10;
            tangon = new Array(1);
            tangon[0] = entity;
            michal = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.getRulesPrompt;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = verify.bind(offset)(tangon, michal);
            var _closure2_slot2 = michal;
            tangon = oscard[option];
            romeon = zuuluu.bind(report)(tangon);
            offset = romeon.useStateFromStores;
            tangon = _closure1_slot11;
            verify = new Array(1);
            verify[0] = tangon;
            tangon = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getGuild;
                    entity = _closure2_slot0;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00016_ip = 41; continue _fun00015 }
 35:
                    entity = michal.rulesChannelId;
 41:
                    return entity;
                }
            };
            tangon = offset.bind(romeon)(verify, tangon);
            var _closure2_slot3 = tangon;
            tangon = _closure1_slot1;
            verify = 18;
            verify = oscard[verify];
            verify = tangon.bind(report)(verify);
            verify = verify.bind(report)();
            ctrled = verify.bottom;
            verify = 64;
            offset = verify + ctrled;
            verify = 8;
            kiloes = offset + verify;
            option = oscard[option];
            offset = zuuluu.bind(report)(option);
            verify = offset.useStateFromStores;
            option = new Array(1);
            option[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.get;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = verify.bind(offset)(option, entity);
            var _closure2_slot4 = entity;
            verify = _closure1_slot4;
            option = verify.useState;
            entity = false;
            verify = option.bind(verify)(entity);
            option = _closure1_slot3;
            entity = 2;
            option = option.bind(report)(verify, entity);
            foxtra = 0;
            romeon = option[foxtra];
            entity = 1;
            entity = option[entity];
            var _closure2_slot5 = entity;
            entity = 19;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            tangon = entity.bind(report)();
            entity = 20;
            entity = oscard[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isThemeDark;
            offset = entity.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 15;
            entity = oscard[entity];
            verify = zuuluu.bind(report)(entity);
            option = verify.hexWithOpacity;
            tangon = _closure1_slot1;
            zuuluu = 13;
            entity = oscard[zuuluu];
            entity = tangon.bind(report)(entity);
            entity = entity.unsafe_rawColors;
            if(offset) { _fun00014_ip = 403; continue _fun00013 }
 357:
            offset = entity.PRIMARY_130;
            backup = option.bind(verify)(offset, foxtra);
            offset = new Array(2);
            offset[0] = backup;
            backup = oscard[zuuluu];
            backup = tangon.bind(report)(backup);
            backup = backup.unsafe_rawColors;
            backup = backup.PRIMARY_130;
            offset[1] = backup;
            _fun00014_ip = 450; continue _fun00013;
 403:
            entity = entity.PRIMARY_600;
            option = option.bind(verify)(entity, foxtra);
            entity = new Array(2);
            entity[0] = option;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.unsafe_rawColors;
            zuuluu = zuuluu.PRIMARY_600;
            entity[1] = zuuluu;
            offset = entity;
 450:
            entity = null;
            michal = entity == michal;
            if(michal) { _fun00014_ip = 1115; continue _fun00013 }
 462:
            tangon = _closure1_slot16;
            foxtra = _closure1_slot0;
            source = _closure1_slot2;
            michal = 21;
            michal = source[michal];
            michal = foxtra.bind(report)(michal);
            zuuluu = michal.SafeAreaPaddingView;
            michal = {};
            oscard = true;
            michal['top'] = oscard;
            option = yankee.flex;
            oscard = new Array(2);
            oscard[0] = option;
            option = yankee.container;
            oscard[1] = option;
            michal['style'] = oscard;
            backup = _closure1_slot16;
            verify = _closure1_slot6;
            oscard = {};
            option = yankee.flex;
            oscard['style'] = option;
            output = _closure1_slot15;
            sizing = _closure1_slot8;
            option = {};
            echoed = yankee.scrollContainer;
            result = new Array(2);
            result[0] = echoed;
            echoed = {};
            echoed['paddingBottom'] = kiloes;
            result[1] = echoed;
            option['contentContainerStyle'] = result;
            result = [0];
            option['data'] = result;
            result = function() { // Original name: renderItem
                tangon = _closure1_slot15;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 22;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                oscard = _closure2_slot2;
                oscard = oscard.values;
                entity['rules'] = oscard;
                report = _closure2_slot3;
                entity['rulesChannelId'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            option['renderItem'] = result;
            result = function() { // Original name: onEndReached
                zuuluu = _closure2_slot5;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            option['onEndReached'] = result;
            option = output.bind(report)(sizing, option);
            sizing = new Array(2);
            sizing[0] = option;
            echoed = _closure1_slot16;
            result = _closure1_slot6;
            output = {};
            update = yankee.footer;
            option = new Array(3);
            option[0] = update;
            update = yankee.footerContent;
            option[1] = update;
            update = {};
            update['paddingBottom'] = ctrled;
            option[2] = update;
            output['style'] = option;
            update = _closure1_slot15;
            option = 23;
            option = source[option];
            option = foxtra.bind(report)(option);
            foxtra = option.Text;
            option = {};
            source = yankee.footerText;
            option['style'] = source;
            source = 'text-xs/medium';
            option['variant'] = source;
            ctrled = _closure1_slot0;
            source = _closure1_slot2;
            config = 24;
            vacuum = source[config];
            vacuum = ctrled.bind(report)(vacuum);
            record = vacuum.intl;
            vacuum = record.string;
            source = source[config];
            source = ctrled.bind(report)(source);
            ctrled = source.t;
            if(romeon) { _fun00014_ip = 785; continue _fun00013 }
 770:
            source = ctrled.D0CVAQ;
            source = vacuum.bind(record)(source);
            _fun00014_ip = 798; continue _fun00013;
 785:
            ctrled = ctrled.arAe3N;
            source = vacuum.bind(record)(ctrled);
 798:
            option['children'] = source;
            option = update.bind(report)(foxtra, option);
            update = new Array(2);
            update[0] = option;
            vacuum = _closure1_slot15;
            option = _closure1_slot1;
            foxtra = _closure1_slot2;
            source = 25;
            source = foxtra[source];
            ctrled = option.bind(report)(source);
            source = {};
            romeon = !romeon;
            source['disabled'] = romeon;
            record = yankee.footerButtonText;
            romeon = new Array(1);
            romeon[0] = record;
            source['textStyle'] = romeon;
            romeon = yankee.footerButton;
            source['style'] = romeon;
            romeon = _closure1_slot0;
            record = foxtra[config];
            record = romeon.bind(report)(record);
            cntext = record.intl;
            record = cntext.string;
            config = foxtra[config];
            config = romeon.bind(report)(config);
            config = config.t;
            config = config.0KL0oq;
            config = record.bind(cntext)(config);
            source['text'] = config;
            sequen = function() { // Original name: onPress
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00018_ip = 132; continue _fun00017 }
 13:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 26;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.submitVerificationForm;
                    tangon = _closure2_slot0;
                    zuuluu = {};
                    offset = _closure2_slot4;
                    yankee = zuuluu;
                    golfie = copyDataProperties(yankee, offset);
                    golfie = {};
                    offset = _closure2_slot2;
                    yankee = golfie;
                    option = copyDataProperties(yankee, offset);
                    verify = true;
                    option = 'response';
                    golfie[option] = verify;
                    option = new Array(1);
                    option[0] = golfie;
                    golfie = 'formFields';
                    zuuluu[golfie] = option;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.push;
                    entity = _closure1_slot13;
                    entity = entity.COMPLETED;
                    entity = michal.bind(zuuluu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            source['onPress'] = sequen;
            source = vacuum.bind(report)(ctrled, source);
            update[1] = source;
            output['children'] = update;
            output = echoed.bind(report)(result, output);
            sizing[1] = output;
            oscard['children'] = sizing;
            verify = backup.bind(report)(verify, oscard);
            oscard = new Array(2);
            oscard[0] = verify;
            verify = _closure1_slot15;
            golfie = 27;
            golfie = foxtra[golfie];
            option = option.bind(report)(golfie);
            golfie = {};
            backup = yankee.scrollContainerGradient;
            yankee = new Array(2);
            yankee[0] = backup;
            backup = {};
            backup['bottom'] = kiloes;
            yankee[1] = backup;
            golfie['style'] = yankee;
            yankee = 28;
            backup = foxtra[yankee];
            backup = romeon.bind(report)(backup);
            backup = backup.VerticalGradient;
            backup = backup.START;
            golfie['start'] = backup;
            yankee = foxtra[yankee];
            yankee = romeon.bind(report)(yankee);
            yankee = yankee.VerticalGradient;
            yankee = yankee.END;
            golfie['end'] = yankee;
            golfie['colors'] = offset;
            offset = 'none';
            golfie['pointerEvents'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1115:
            return entity;
        }
    };
    zuuluu['RulesPrompt'] = tangon;
    tangon = function(argFoo) { // Original name: MultipleChoicePrompt
        entity = argFoo;
        foxtra = entity.guildId;
        var _closure2_slot0 = foxtra;
        romeon = entity.currentPrompt;
        var _closure2_slot1 = romeon;
        verify = entity.lastPrompt;
        sizing = entity.currentPromptIndex;
        result = entity.numberOfPrompts;
        michal = entity.selectOption;
        var _closure2_slot2 = michal;
        offset = entity.handleOnPress;
        entity = _closure1_slot18;
        tangon = undefined;
        option = entity.bind(tangon)();
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 18;
        entity = zuuluu[entity];
        entity = michal.bind(tangon)(entity);
        entity = entity.bind(tangon)();
        echoed = entity.bottom;
        michal = _closure1_slot0;
        entity = 17;
        entity = zuuluu[entity];
        golfie = michal.bind(tangon)(entity);
        report = golfie.useStateFromStoresArray;
        entity = _closure1_slot12;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        michal = new Array(2);
        michal[0] = foxtra;
        michal[1] = romeon;
        entity = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                if(!(entity == zuuluu)) { _fun00020_ip = 19; continue _fun00019 }
 13:
                entity = new Array(0);
                _fun00020_ip = 51; continue _fun00019;
 19:
                report = _closure1_slot12;
                tangon = report.getOnboardingResponsesForPrompt;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                michal = michal.id;
                entity = tangon.bind(report)(zuuluu, michal);
 51:
                return entity;
            }
        };
        yankee = report.bind(golfie)(zuuluu, entity, michal);
        var _closure2_slot3 = yankee;
        zuuluu = _closure1_slot16;
        michal = _closure1_slot17;
        entity = {};
        golfie = _closure1_slot7;
        report = {};
        backup = option.scrollContainer;
        option = new Array(2);
        option[0] = backup;
        backup = {};
        kiloes = 64;
        kiloes = kiloes + echoed;
        echoed = 48;
        kiloes = kiloes + echoed;
        kiloes = kiloes + echoed;
        backup['paddingBottom'] = kiloes;
        kiloes = 'relative';
        backup['position'] = kiloes;
        option[1] = backup;
        report['contentContainerStyle'] = option;
        kiloes = _closure1_slot15;
        backup = _closure1_slot19;
        option = {};
        option['currentPrompt'] = romeon;
        option['numberOfPrompts'] = result;
        option['currentPromptIndex'] = sizing;
        backup = kiloes.bind(tangon)(backup, option);
        option = new Array(2);
        option[0] = backup;
        sizing = _closure1_slot15;
        kiloes = _closure1_slot6;
        backup = {};
        echoed = romeon.options;
        result = echoed.map;
        output = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = _closure1_slot15;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 31;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                michal['option'] = entity;
                option = _closure2_slot0;
                michal['guildId'] = option;
                golfie = function(argFoo) { // Original name: onSelect
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = argFoo;
                        report = _closure2_slot2;
                        michal = _closure2_slot1;
                        tangon = michal.id;
                        michal = _closure3_slot0;
                        zuuluu = michal.id;
                        michal = null;
                        michal = michal != entity;
                        if(!michal) { _fun00024_ip = 43; continue _fun00023 }
 40:
                        michal = entity;
 43:
                        entity = undefined;
                        entity = report.bind(entity)(tangon, zuuluu, michal);
                        return entity;
                    }
                };
                michal['onSelect'] = golfie;
                option = _closure2_slot3;
                golfie = option.includes;
                oscard = entity.id;
                golfie = golfie.bind(option)(oscard);
                oscard = null;
                oscard = oscard != golfie;
                if(!oscard) { _fun00022_ip = 97; continue _fun00021 }
 94:
                oscard = golfie;
 97:
                michal['selected'] = oscard;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            }
        };
        output = result.bind(echoed)(output);
        backup['children'] = output;
        backup = sizing.bind(tangon)(kiloes, backup);
        option[1] = backup;
        report['children'] = option;
        golfie = zuuluu.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot15;
        golfie = _closure1_slot20;
        oscard = {};
        oscard['guildId'] = foxtra;
        oscard['currentPrompt'] = romeon;
        oscard['selectedOptionIds'] = yankee;
        oscard['handleOnPress'] = offset;
        oscard['lastPrompt'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['MultipleChoicePrompt'] = tangon;
    michal = function(argFoo) { // Original name: DropdownPrompt
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            michal = argFoo;
            foxtra = michal.guildId;
            var _closure2_slot0 = foxtra;
            romeon = michal.currentPrompt;
            var _closure2_slot1 = romeon;
            verify = michal.lastPrompt;
            sizing = michal.currentPromptIndex;
            output = michal.numberOfPrompts;
            entity = michal.selectOption;
            var _closure2_slot2 = entity;
            offset = michal.handleOnPress;
            michal = _closure1_slot18;
            tangon = undefined;
            cntext = michal.bind(tangon)();
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 18;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            result = michal.bottom;
            zuuluu = _closure1_slot0;
            michal = 17;
            michal = report[michal];
            option = zuuluu.bind(tangon)(michal);
            golfie = option.useStateFromStoresArray;
            michal = _closure1_slot12;
            report = new Array(1);
            report[0] = michal;
            zuuluu = new Array(2);
            zuuluu[0] = foxtra;
            zuuluu[1] = romeon;
            michal = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00028_ip = 19; continue _fun00027 }
 13:
                    entity = new Array(0);
                    _fun00028_ip = 51; continue _fun00027;
 19:
                    report = _closure1_slot12;
                    tangon = report.getOnboardingResponsesForPrompt;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 51:
                    return entity;
                }
            };
            yankee = golfie.bind(option)(report, michal, zuuluu);
            var _closure2_slot3 = yankee;
            michal = null;
            zuuluu = michal == romeon;
            vacuum = undefined;
            if(zuuluu) { _fun00026_ip = 202; continue _fun00025 }
 173:
            report = romeon.options;
            michal = michal == report;
            vacuum = undefined;
            if(michal) { _fun00026_ip = 202; continue _fun00025 }
 187:
            zuuluu = report.filter;
            michal = function(argFoo) {
                zuuluu = _closure2_slot3;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            vacuum = zuuluu.bind(report)(michal);
 202:
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = new Array(3);
            michal[0] = foxtra;
            golfie = romeon.id;
            michal[1] = golfie;
            michal[2] = entity;
            entity = function() {
                report = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 34;
                tangon = michal[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.openLazy;
                tangon = _closure1_slot0;
                zuuluu = 36;
                zuuluu = michal[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = 35;
                zuuluu = michal[zuuluu];
                michal = michal.paths;
                tangon = tangon.bind(entity)(zuuluu, michal);
                zuuluu = {};
                golfie = _closure2_slot0;
                zuuluu['guildId'] = golfie;
                michal = _closure2_slot1;
                michal = michal.id;
                zuuluu['promptId'] = michal;
                michal = function(argFoo, argBar) { // Original name: onSelect
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        entity = argBar;
                        report = _closure2_slot2;
                        michal = _closure2_slot1;
                        tangon = michal.id;
                        michal = argFoo;
                        zuuluu = michal.id;
                        michal = null;
                        michal = michal != entity;
                        if(!michal) { _fun00030_ip = 39; continue _fun00029 }
 36:
                        michal = entity;
 39:
                        entity = undefined;
                        entity = report.bind(entity)(tangon, zuuluu, michal);
                        return entity;
                    }
                };
                zuuluu['onSelect'] = michal;
                michal = 'DropdownOptions';
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                return entity;
            };
            update = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot16;
            michal = _closure1_slot17;
            entity = {};
            golfie = _closure1_slot7;
            report = {};
            backup = cntext.scrollContainer;
            option = new Array(2);
            option[0] = backup;
            backup = {};
            kiloes = 64;
            kiloes = kiloes + result;
            result = 48;
            kiloes = kiloes + result;
            kiloes = kiloes + result;
            backup['paddingBottom'] = kiloes;
            kiloes = 'relative';
            backup['position'] = kiloes;
            option[1] = backup;
            report['contentContainerStyle'] = option;
            kiloes = _closure1_slot15;
            backup = _closure1_slot19;
            option = {};
            option['currentPrompt'] = romeon;
            option['numberOfPrompts'] = output;
            option['currentPromptIndex'] = sizing;
            backup = kiloes.bind(tangon)(backup, option);
            option = new Array(2);
            option[0] = backup;
            sizing = _closure1_slot15;
            kiloes = _closure1_slot6;
            backup = {};
            echoed = _closure1_slot16;
            result = _closure1_slot0;
            ctrled = _closure1_slot2;
            output = 37;
            output = ctrled[output];
            output = result.bind(tangon)(output);
            result = output.PressableHighlight;
            output = {};
            ctrled = cntext.dropdownContainer;
            output['style'] = ctrled;
            output['onPress'] = update;
            ctrled = vacuum.length;
            update = 0;
            ctrled = update === ctrled;
            if(!ctrled) { _fun00026_ip = 485; continue _fun00025 }
 424:
            config = _closure1_slot15;
            sequen = _closure1_slot0;
            record = _closure1_slot2;
            update = 23;
            update = record[update];
            update = sequen.bind(tangon)(update);
            sequen = update.Text;
            update = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-muted', 'children': 'No answers selected.'};
            record = cntext.emptyDropdownText;
            update['style'] = record;
            ctrled = config.bind(tangon)(sequen, update);
 485:
            update = new Array(3);
            update[0] = ctrled;
            ctrled = vacuum.map;
            source = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot15;
                tangon = _closure1_slot22;
                zuuluu = {};
                zuuluu['option'] = entity;
                michal = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            source = ctrled.bind(vacuum)(source);
            update[1] = source;
            vacuum = _closure1_slot15;
            ctrled = _closure1_slot6;
            source = {};
            sequen = cntext.dropdownIconContainer;
            source['style'] = sequen;
            record = _closure1_slot15;
            config = _closure1_slot5;
            sequen = {};
            cntext = cntext.dropdownIcon;
            sequen['style'] = cntext;
            papara = _closure1_slot1;
            target = _closure1_slot2;
            cntext = 38;
            cntext = target[cntext];
            cntext = papara.bind(tangon)(cntext);
            sequen['source'] = cntext;
            sequen = record.bind(tangon)(config, sequen);
            source['children'] = sequen;
            source = vacuum.bind(tangon)(ctrled, source);
            update[2] = source;
            output['children'] = update;
            output = echoed.bind(tangon)(result, output);
            backup['children'] = output;
            backup = sizing.bind(tangon)(kiloes, backup);
            option[1] = backup;
            report['children'] = option;
            golfie = zuuluu.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot15;
            golfie = _closure1_slot20;
            oscard = {};
            oscard['guildId'] = foxtra;
            oscard['currentPrompt'] = romeon;
            oscard['selectedOptionIds'] = yankee;
            oscard['handleOnPress'] = offset;
            oscard['lastPrompt'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['DropdownPrompt'] = michal;
    return entity;
})();