// app/modules/user_profile/native/UserProfileEditTheme.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ColorSwatch
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            update = entity.color;
            verify = entity.label;
            foxtra = entity.accessibilityLabel;
            romeon = entity.onPress;
            backup = entity.style;
            entity = _closure1_slot6;
            tangon = undefined;
            kiloes = entity.bind(tangon)();
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            result = 5;
            michal = entity[result];
            report = golfie.bind(tangon)(michal);
            zuuluu = report.getContrast;
            michal = entity[result];
            offset = golfie.bind(tangon)(michal);
            option = offset.hex2int;
            michal = _closure1_slot7;
            michal = option.bind(offset)(michal);
            michal = zuuluu.bind(report)(update, michal);
            zuuluu = entity[result];
            report = golfie.bind(tangon)(zuuluu);
            zuuluu = report.getContrast;
            entity = entity[result];
            option = golfie.bind(tangon)(entity);
            golfie = option.hex2int;
            entity = _closure1_slot8;
            entity = golfie.bind(option)(entity);
            entity = zuuluu.bind(report)(update, entity);
            if(!(!(michal > entity))) { _fun00002_ip = 152; continue _fun00001 }
 146:
            sizing = _closure1_slot8;
            _fun00002_ip = 156; continue _fun00001;
 152:
            sizing = _closure1_slot7;
 156:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot3;
            entity = {};
            report = kiloes.colorSwatchContainer;
            entity['style'] = report;
            yankee = _closure1_slot4;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            report = 6;
            report = offset[report];
            report = golfie.bind(tangon)(report);
            option = report.PressableOpacity;
            report = {};
            output = 'button';
            report['accessibilityRole'] = output;
            report['accessibilityLabel'] = foxtra;
            foxtra = 7;
            output = offset[foxtra];
            output = golfie.bind(tangon)(output);
            echoed = output.intl;
            output = echoed.string;
            foxtra = offset[foxtra];
            foxtra = golfie.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.Qp04hI;
            foxtra = output.bind(echoed)(foxtra);
            report['accessibilityHint'] = foxtra;
            output = kiloes.colorSwatch;
            foxtra = new Array(3);
            foxtra[0] = output;
            output = {};
            result = offset[result];
            echoed = golfie.bind(tangon)(result);
            result = echoed.int2hex;
            result = result.bind(echoed)(update);
            output['backgroundColor'] = result;
            foxtra[1] = output;
            foxtra[2] = backup;
            report['style'] = foxtra;
            report['onPress'] = romeon;
            backup = _closure1_slot4;
            romeon = 8;
            romeon = offset[romeon];
            romeon = golfie.bind(tangon)(romeon);
            foxtra = romeon.PencilIcon;
            romeon = {};
            output = 'xs';
            romeon['size'] = output;
            romeon['color'] = sizing;
            kiloes = kiloes.dropperIcon;
            romeon['style'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            report['children'] = romeon;
            option = yankee.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            option = _closure1_slot4;
            oscard = 9;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot4 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    verify = offset.createStyles;
    option = {};
    tangon = {};
    yankee = 6;
    tangon['gap'] = yankee;
    option['container'] = tangon;
    tangon = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    option['sectionHeader'] = tangon;
    tangon = {'flexDirection': 'row', 'gap': 12, 'justifyContent': 'center'};
    option['themeColorContainer'] = tangon;
    tangon = 4;
    yankee = {'position': 'relative', 'flex': 1, 'flexDirection': 'column', 'alignItems': 'center', 'gap': 4};
    option['colorSwatchContainer'] = yankee;
    yankee = {'height': 50, 'width': '100%'};
    romeon = oscard[tangon];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    yankee['borderRadius'] = romeon;
    option['colorSwatch'] = yankee;
    yankee = {'position': 'absolute', 'top': 10, 'right': 10};
    option['dropperIcon'] = yankee;
    yankee = {};
    romeon = oscard[tangon];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.HEADER_SECONDARY;
    yankee['tintColor'] = romeon;
    option['overflowMenu'] = yankee;
    option = verify.bind(offset)(option);
    var _closure1_slot6 = option;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    option = option.unsafe_rawColors;
    option = option.WHITE_500;
    var _closure1_slot7 = option;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.unsafe_rawColors;
    tangon = tangon.PRIMARY_530;
    var _closure1_slot8 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileEditTheme.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileEditTheme
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.user;
            michal = entity.onProfileThemeColorsChanged;
            var _closure2_slot0 = michal;
            option = entity.pendingThemeColors;
            tangon = entity.guildId;
            golfie = entity.pendingAvatar;
            romeon = entity.showResetMenu;
            report = undefined;
            if(!(romeon === report)) { _fun00004_ip = 51; continue _fun00003 }
 49:
            romeon = false;
 51:
            zuuluu = entity.isTryItOut;
            if(!(zuuluu === report)) { _fun00004_ip = 63; continue _fun00003 }
 61:
            zuuluu = false;
 63:
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot6;
            offset = entity.bind(report)();
            michal = _closure1_slot1;
            foxtra = _closure1_slot2;
            entity = 10;
            entity = foxtra[entity];
            verify = michal.bind(report)(entity);
            entity = oscard.id;
            verify = verify.bind(report)(entity, tangon);
            _closure2_slot1 = verify;
            entity = 11;
            entity = foxtra[entity];
            michal = michal.bind(report)(entity);
            entity = {};
            entity['user'] = oscard;
            entity['displayProfile'] = verify;
            entity['pendingThemeColors'] = option;
            entity['isPreview'] = zuuluu;
            entity = michal.bind(report)(entity);
            cntext = entity.primaryColor;
            _closure2_slot2 = cntext;
            update = entity.secondaryColor;
            _closure2_slot3 = update;
            entity = null;
            if(!(entity == golfie)) { _fun00004_ip = 208; continue _fun00003 }
 193:
            zuuluu = oscard.getAvatarURL;
            michal = 80;
            golfie = zuuluu.bind(oscard)(tangon, michal);
 208:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 12;
            michal = option[michal];
            oscard = zuuluu.bind(report)(michal);
            tangon = oscard.useAvatarColors;
            zuuluu = _closure1_slot1;
            michal = 4;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.unsafe_rawColors;
            zuuluu = michal.PRIMARY_530;
            michal = false;
            michal = tangon.bind(oscard)(golfie, zuuluu, michal);
            _closure2_slot4 = michal;
            if(!(entity != cntext)) { _fun00004_ip = 1029; continue _fun00003 }
 281:
            if(!(entity != update)) { _fun00004_ip = 1029; continue _fun00003 }
 288:
            michal = function(argFoo) { // Original name: handleProfileThemeColorsChanged
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    oscard = _closure2_slot1;
                    zuuluu = null;
                    oscard = zuuluu == oscard;
                    zuuluu = undefined;
                    if(oscard) { _fun00006_ip = 56; continue _fun00005 }
 46:
                    oscard = _closure2_slot1;
                    zuuluu = oscard.themeColors;
 56:
                    report = report.bind(entity)(tangon, zuuluu);
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    if(report) { _fun00006_ip = 74; continue _fun00005 }
 71:
                    michal = tangon;
 74:
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            _closure2_slot5 = michal;
            sizing = function(argFoo, argBar) { // Original name: makeOnPress
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = argBar;
                var _closure3_slot1 = michal;
                entity = function() {
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 14;
                    zuuluu = tangon[entity];
                    entity = undefined;
                    oscard = golfie.bind(entity)(zuuluu);
                    report = oscard.markDismissibleContentAsDismissed;
                    zuuluu = 15;
                    zuuluu = tangon[zuuluu];
                    zuuluu = golfie.bind(entity)(zuuluu);
                    zuuluu = zuuluu.DismissibleContent;
                    zuuluu = zuuluu.PROFILE_THEMES_SETTINGS_VIEWED_V2;
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = _closure1_slot1;
                    michal = 16;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = {};
                    report = _closure3_slot0;
                    michal['color'] = report;
                    tangon = _closure3_slot1;
                    michal['onSelect'] = tangon;
                    tangon = _closure2_slot4;
                    michal['suggestedColors'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            };
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            oscard = offset.container;
            michal['style'] = oscard;
            option = _closure1_slot5;
            golfie = _closure1_slot3;
            oscard = {};
            verify = offset.sectionHeader;
            oscard['style'] = verify;
            output = _closure1_slot4;
            ctrled = _closure1_slot0;
            result = _closure1_slot2;
            verify = 9;
            verify = result[verify];
            verify = ctrled.bind(report)(verify);
            foxtra = verify.Text;
            verify = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            backup = 7;
            echoed = result[backup];
            echoed = ctrled.bind(report)(echoed);
            source = echoed.intl;
            echoed = source.string;
            result = result[backup];
            result = ctrled.bind(report)(result);
            result = result.t;
            result = result.DMeO2d;
            result = echoed.bind(source)(result);
            verify['children'] = result;
            foxtra = output.bind(report)(foxtra, verify);
            verify = new Array(2);
            verify[0] = foxtra;
            if(!romeon) { _fun00004_ip = 612; continue _fun00003 }
 455:
            result = _closure1_slot4;
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            foxtra = 6;
            foxtra = vacuum[foxtra];
            foxtra = source.bind(report)(foxtra);
            output = foxtra.PressableOpacity;
            foxtra = {};
            echoed = 'button';
            foxtra['accessibilityRole'] = echoed;
            echoed = vacuum[backup];
            echoed = source.bind(report)(echoed);
            sequen = echoed.intl;
            ctrled = sequen.string;
            echoed = vacuum[backup];
            echoed = source.bind(report)(echoed);
            echoed = echoed.t;
            echoed = echoed.+1H47u;
            echoed = ctrled.bind(sequen)(echoed);
            foxtra['accessibilityLabel'] = echoed;
            echoed = function() { // Original name: onPress
                report = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 17;
                tangon = michal[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.openLazy;
                tangon = _closure1_slot0;
                zuuluu = 19;
                zuuluu = michal[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = 18;
                zuuluu = michal[zuuluu];
                michal = michal.paths;
                tangon = tangon.bind(entity)(zuuluu, michal);
                zuuluu = {};
                michal = function() { // Original name: onResetTheme
                    zuuluu = _closure2_slot5;
                    michal = undefined;
                    entity = [null, null];
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                zuuluu['onResetTheme'] = michal;
                michal = 'Profile Theme';
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                return entity;
            };
            foxtra['onPress'] = echoed;
            ctrled = _closure1_slot4;
            echoed = 20;
            echoed = vacuum[echoed];
            echoed = source.bind(report)(echoed);
            source = echoed.MoreHorizontalIcon;
            echoed = {};
            vacuum = offset.overflowMenu;
            vacuum = vacuum.tintColor;
            echoed['color'] = vacuum;
            echoed = ctrled.bind(report)(source, echoed);
            foxtra['children'] = echoed;
            romeon = result.bind(report)(output, foxtra);
 612:
            verify[1] = romeon;
            oscard['children'] = verify;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot5;
            option = _closure1_slot3;
            golfie = {};
            offset = offset.themeColorContainer;
            golfie['style'] = offset;
            romeon = _closure1_slot4;
            foxtra = _closure1_slot9;
            offset = {};
            output = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure2_slot2;
                    if(!(tangon !== michal)) { _fun00008_ip = 41; continue _fun00007 }
 14:
                    zuuluu = _closure2_slot5;
                    michal = new Array(2);
                    michal[0] = tangon;
                    entity = _closure2_slot3;
                    michal[1] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            output = sizing.bind(report)(cntext, output);
            offset['onPress'] = output;
            offset['color'] = cntext;
            echoed = _closure1_slot0;
            source = _closure1_slot2;
            output = source[backup];
            output = echoed.bind(report)(output);
            ctrled = output.intl;
            result = ctrled.string;
            output = source[backup];
            output = echoed.bind(report)(output);
            output = output.t;
            output = output.C3KTQk;
            output = result.bind(ctrled)(output);
            offset['label'] = output;
            output = source[backup];
            output = echoed.bind(report)(output);
            sequen = output.intl;
            vacuum = sequen.formatToPlainString;
            output = source[backup];
            output = echoed.bind(report)(output);
            output = output.t;
            ctrled = output.v4X2kZ;
            output = {};
            result = 5;
            config = source[result];
            record = echoed.bind(report)(config);
            config = record.int2hex;
            config = config.bind(record)(cntext);
            output['colorHex'] = config;
            output = vacuum.bind(sequen)(ctrled, output);
            offset['accessibilityLabel'] = output;
            romeon = romeon.bind(report)(foxtra, offset);
            offset = new Array(2);
            offset[0] = romeon;
            romeon = _closure1_slot4;
            yankee = {};
            yankee['color'] = update;
            kiloes = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zuuluu = _closure2_slot3;
                    if(!(entity !== zuuluu)) { _fun00010_ip = 41; continue _fun00009 }
 14:
                    zuuluu = _closure2_slot5;
                    tangon = _closure2_slot2;
                    michal = new Array(2);
                    michal[0] = tangon;
                    michal[1] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = sizing.bind(report)(update, kiloes);
            yankee['onPress'] = kiloes;
            kiloes = source[backup];
            kiloes = echoed.bind(report)(kiloes);
            output = kiloes.intl;
            sizing = output.string;
            kiloes = source[backup];
            kiloes = echoed.bind(report)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.8elvy8;
            kiloes = sizing.bind(output)(kiloes);
            yankee['label'] = kiloes;
            kiloes = source[backup];
            kiloes = echoed.bind(report)(kiloes);
            output = kiloes.intl;
            sizing = output.formatToPlainString;
            backup = source[backup];
            backup = echoed.bind(report)(backup);
            backup = backup.t;
            kiloes = backup.I0tmrq;
            backup = {};
            result = source[result];
            echoed = echoed.bind(report)(result);
            result = echoed.int2hex;
            result = result.bind(echoed)(update);
            backup['colorHex'] = result;
            backup = sizing.bind(output)(kiloes, backup);
            yankee['accessibilityLabel'] = backup;
            yankee = romeon.bind(report)(foxtra, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1029:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();