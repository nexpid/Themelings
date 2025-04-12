// app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: TitleWrapper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = michal.children;
            foxtra = michal.onPress;
            romeon = michal.pressAccessibilityLabel;
            zuuluu = _closure1_slot14;
            report = undefined;
            golfie = zuuluu.bind(report)();
            tangon = _closure1_slot4;
            zuuluu = tangon.useState;
            option = zuuluu.bind(tangon)(report);
            tangon = _closure1_slot3;
            zuuluu = 2;
            tangon = tangon.bind(report)(option, zuuluu);
            zuuluu = 0;
            yankee = tangon[zuuluu];
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            var _closure2_slot0 = zuuluu;
            option = _closure1_slot4;
            tangon = option.useCallback;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                zuuluu = _closure2_slot0;
                michal = {};
                tangon = true;
                michal['borderless'] = tangon;
                entity = entity.layout;
                entity = entity.width;
                michal['radius'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = new Array(0);
            kiloes = tangon.bind(option)(zuuluu, entity);
            entity = null;
            if(!(entity != foxtra)) { _fun00002_ip = 282; continue _fun00001 }
 111:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot12;
            entity = {};
            offset = _closure1_slot11;
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            option = 10;
            option = output[option];
            option = sizing.bind(report)(option);
            verify = option.PressableOpacity;
            option = {};
            backup = 11;
            backup = output[backup];
            sizing = sizing.bind(report)(backup);
            backup = sizing.isAndroid;
            sizing = backup.bind(sizing)();
            backup = undefined;
            if(!sizing) { _fun00002_ip = 182; continue _fun00001 }
 179:
            backup = kiloes;
 182:
            option['onLayout'] = backup;
            option['onPress'] = foxtra;
            option['androidRippleConfig'] = yankee;
            yankee = 'header';
            option['accessibilityRole'] = yankee;
            yankee = golfie.wrapper;
            option['style'] = yankee;
            option['children'] = oscard;
            verify = offset.bind(report)(verify, option);
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot11;
            offset = _closure1_slot5;
            verify = {};
            verify['onPress'] = foxtra;
            verify['accessibilityLabel'] = romeon;
            romeon = golfie.hiddenPressable;
            verify['style'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            option[1] = verify;
            entity['children'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 320; continue _fun00001;
 282:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot6;
            michal = {};
            golfie = golfie.wrapper;
            michal['style'] = golfie;
            golfie = 'header';
            michal['accessibilityRole'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 320:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: ChannelTitle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            kiloes = entity.title;
            sizing = entity.accessibleTitle;
            offset = entity.subtitle;
            romeon = entity.disableArrow;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00004_ip = 34; continue _fun00003 }
 32:
            romeon = false;
 34:
            entity = _closure1_slot14;
            yankee = entity.bind(tangon)();
            zuuluu = _closure1_slot13;
            michal = _closure1_slot6;
            entity = {};
            report = yankee.channelContent;
            entity['style'] = report;
            option = _closure1_slot13;
            oscard = _closure1_slot6;
            report = {};
            verify = yankee.nameWithArrow;
            report['style'] = verify;
            backup = _closure1_slot11;
            foxtra = _closure1_slot0;
            output = _closure1_slot2;
            verify = 12;
            verify = output[verify];
            verify = foxtra.bind(tangon)(verify);
            foxtra = verify.Text;
            verify = {'variant': 'heading-lg/bold', 'color': 'header-primary', 'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'accessibilityRole': 'header', 'maxFontSizeMultiplier': 2};
            output = yankee.channelName;
            verify['style'] = output;
            verify['accessibilityLabel'] = sizing;
            verify['children'] = kiloes;
            foxtra = backup.bind(tangon)(foxtra, verify);
            verify = new Array(2);
            verify[0] = foxtra;
            romeon = !romeon;
            if(!romeon) { _fun00004_ip = 253; continue _fun00003 }
 170:
            kiloes = _closure1_slot11;
            output = _closure1_slot1;
            result = _closure1_slot2;
            sizing = 13;
            foxtra = result[sizing];
            backup = output.bind(tangon)(foxtra);
            foxtra = {};
            echoed = 14;
            echoed = result[echoed];
            echoed = output.bind(tangon)(echoed);
            foxtra['source'] = echoed;
            sizing = result[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.Sizes;
            sizing = sizing.REFRESH_SMALL_16;
            foxtra['size'] = sizing;
            sizing = yankee.arrowIcon;
            foxtra['style'] = sizing;
            romeon = kiloes.bind(tangon)(backup, foxtra);
 253:
            verify[1] = romeon;
            report['children'] = verify;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            oscard = null;
            oscard = oscard != offset;
            if(!oscard) { _fun00004_ip = 314; continue _fun00003 }
 284:
            verify = _closure1_slot11;
            option = _closure1_slot6;
            golfie = {};
            yankee = yankee.subTitleContainer;
            golfie['style'] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 314:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: GroupDMIcon
        entity = argFoo;
        oscard = entity.channel;
        entity = _closure1_slot14;
        tangon = undefined;
        report = entity.bind(tangon)();
        zuuluu = _closure1_slot11;
        michal = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 15;
        entity = verify[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        option = _closure1_slot0;
        golfie = 16;
        golfie = verify[golfie];
        golfie = option.bind(tangon)(golfie);
        golfie = golfie.AvatarSizes;
        golfie = golfie.REFRESH_MEDIUM_32;
        entity['size'] = golfie;
        entity['channel'] = oscard;
        report = report.channelIcon;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: UserAvatar
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            verify = entity.user;
            option = entity.status;
            oscard = entity.isMobileOnline;
            entity = _closure1_slot14;
            tangon = undefined;
            report = entity.bind(tangon)();
            zuuluu = _closure1_slot11;
            michal = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 16;
            entity = yankee[golfie];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['user'] = verify;
            romeon = verify.avatarDecoration;
            entity['avatarDecoration'] = romeon;
            entity['guildId'] = tangon;
            offset = _closure1_slot0;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.AvatarSizes;
            golfie = golfie.REFRESH_MEDIUM_32;
            entity['size'] = golfie;
            golfie = verify.isSystemUser;
            verify = golfie.bind(verify)();
            golfie = null;
            if(verify) { _fun00006_ip = 124; continue _fun00005 }
 121:
            golfie = option;
 124:
            entity['status'] = golfie;
            entity['isMobileOnline'] = oscard;
            report = report.channelIcon;
            entity['style'] = report;
            report = true;
            entity['autoStatusCutout'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    tangon = function(argFoo, argBar) { // Original name: renderChannelIconRaw
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot20;
        michal = {};
        entity = argFoo;
        michal['icon'] = entity;
        entity = argBar;
        michal['IconComponent'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot19 = tangon;
    entity = function(argFoo) { // Original name: ChannelIconRaw
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            option = entity.icon;
            report = entity.IconComponent;
            entity = _closure1_slot14;
            tangon = undefined;
            golfie = entity.bind(tangon)();
            entity = null;
            if(!(entity == report)) { _fun00008_ip = 112; continue _fun00007 }
 33:
            oscard = _closure1_slot11;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 13;
            entity = yankee[verify];
            zuuluu = offset.bind(tangon)(entity);
            entity = {};
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.Sizes;
            verify = verify.SMALL_20;
            entity['size'] = verify;
            entity['source'] = option;
            golfie = golfie.guildChannelIcon;
            golfie = golfie.tintColor;
            entity['color'] = golfie;
            entity = oscard.bind(tangon)(zuuluu, entity);
            _fun00008_ip = 136; continue _fun00007;
 112:
            zuuluu = _closure1_slot11;
            michal = {'size': 'md', 'color': 'text-primary'};
            entity = zuuluu.bind(tangon)(report, michal);
 136:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: ParentChannelSubTitle
        entity = argFoo;
        verify = entity.channel;
        entity = _closure1_slot14;
        tangon = undefined;
        offset = entity.bind(tangon)();
        zuuluu = _closure1_slot11;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        entity = 12;
        entity = option[entity];
        entity = golfie.bind(tangon)(entity);
        michal = entity.Text;
        entity = {'lineClamp': 1, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 2, 'variant': 'text-xs/medium', 'color': 'text-muted'};
        oscard = 19;
        yankee = option[oscard];
        yankee = golfie.bind(tangon)(yankee);
        backup = yankee.intl;
        foxtra = backup.formatToPlainString;
        oscard = option[oscard];
        oscard = golfie.bind(tangon)(oscard);
        oscard = oscard.t;
        romeon = oscard.BjYvHB;
        yankee = {};
        oscard = 20;
        kiloes = option[oscard];
        result = golfie.bind(tangon)(kiloes);
        output = result.computeChannelName;
        sizing = _closure1_slot9;
        kiloes = _closure1_slot8;
        kiloes = output.bind(result)(verify, sizing, kiloes);
        yankee['channelName'] = kiloes;
        yankee = foxtra.bind(backup)(romeon, yankee);
        entity['accessibilityLabel'] = yankee;
        offset = offset.parentChannelName;
        entity['style'] = offset;
        oscard = option[oscard];
        option = golfie.bind(tangon)(oscard);
        golfie = option.computeChannelName;
        oscard = _closure1_slot9;
        report = _closure1_slot8;
        report = golfie.bind(option)(verify, oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: EmptyIcon
        michal = _closure1_slot14;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot11;
        michal = _closure1_slot6;
        entity = {};
        report = report.channelIconWrapper;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = romeon.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Pressable;
    var _closure1_slot5 = option;
    report = report.View;
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ReadStateTypes;
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot11 = option;
    option = report.Fragment;
    var _closure1_slot12 = option;
    report = report.jsxs;
    var _closure1_slot13 = report;
    report = 8;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {'flex': 1, 'alignItems': 'center', 'flexShrink': 1, 'flexDirection': 'row', 'height': '100%', 'paddingEnd': 8};
    report['wrapper'] = offset;
    offset = {'flex': 1, 'flexShrink': 1, 'justifyContent': 'center'};
    report['channelContent'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
    report['nameWithArrow'] = offset;
    offset = {'flexShrink': 1, 'fontSize': 18, 'lineHeight': 24};
    report['channelName'] = offset;
    offset = {'tintColor': null, 'flexShrink': 0, 'flexGrow': 0, 'marginTop': 2, 'marginLeft': 2};
    yankee = 9;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.INTERACTIVE_NORMAL;
    offset['tintColor'] = foxtra;
    report['arrowIcon'] = offset;
    offset = {'marginRight': 12, 'flexShrink': 0};
    report['channelIcon'] = offset;
    offset = {'width': 0, 'height': 0, 'opacity': 0, 'flexGrow': 0};
    report['hiddenPressable'] = offset;
    offset = {'width': 32, 'height': 32, 'justifyContent': 'center', 'alignItems': 'center'};
    report['channelIconWrapper'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_PRIMARY;
    offset['tintColor'] = foxtra;
    report['guildChannelIcon'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'marginBottom': 4};
    report['subTitleContainer'] = offset;
    offset = {'lineHeight': 16, 'flexShrink': 1};
    report['parentChannelName'] = offset;
    offset = {'paddingLeft': 8, 'paddingRight': 8};
    report['eventsActionButtonWithText'] = offset;
    offset = {'width': 8, 'height': 8};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.xs;
    offset['borderRadius'] = foxtra;
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.STATUS_POSITIVE;
    offset['backgroundColor'] = yankee;
    report['onlineIndicator'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot14 = report;
    report = 27;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: renderTitleWrapper
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot15;
        michal = {};
        entity = argBar;
        michal['onPress'] = entity;
        entity = argBaz;
        michal['pressAccessibilityLabel'] = entity;
        entity = argFoo;
        michal['children'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['renderTitleWrapper'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: renderChannelTitle
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = arguments[3];
            tangon = undefined;
            if(!(report === tangon)) { _fun00010_ip = 11; continue _fun00009 }
 9:
            report = false;
 11:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot16;
            entity = {};
            oscard = argFoo;
            entity['title'] = oscard;
            oscard = argBar;
            entity['accessibleTitle'] = oscard;
            oscard = argBaz;
            entity['subtitle'] = oscard;
            entity['disableArrow'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['renderChannelTitle'] = report;
    report = function(argFoo) { // Original name: renderGroupDMIcon
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot17;
        michal = {};
        entity = argFoo;
        michal['channel'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['renderGroupDMIcon'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: renderUserAvatar
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot18;
        michal = {};
        entity = argFoo;
        michal['user'] = entity;
        entity = argBar;
        michal['status'] = entity;
        entity = argBaz;
        michal['isMobileOnline'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['renderUserAvatar'] = report;
    zuuluu['renderChannelIconRaw'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: renderChannelIcon
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            option = argBar;
            tangon = _closure1_slot19;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 17;
            michal = oscard[entity];
            zuuluu = undefined;
            verify = report.bind(zuuluu)(michal);
            michal = verify.getChannelIconWithGuild;
            michal = michal.bind(verify)(golfie, option);
            entity = oscard[entity];
            oscard = report.bind(zuuluu)(entity);
            report = oscard.getChannelIconComponent;
            entity = {};
            verify = null;
            offset = verify == option;
            verify = undefined;
            if(offset) { _fun00012_ip = 81; continue _fun00011 }
 75:
            verify = option.rulesChannelId;
 81:
            option = golfie.id;
            option = verify === option;
            entity['isRulesChannel'] = option;
            entity = report.bind(oscard)(golfie, entity);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    zuuluu['renderChannelIcon'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: renderMemberCountText
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            yankee = argFoo;
            romeon = argBar;
            verify = arguments[2];
            report = undefined;
            if(!(verify === report)) { _fun00014_ip = 17; continue _fun00013 }
 15:
            verify = false;
 17:
            entity = null;
            if(!(entity == yankee)) { _fun00014_ip = 30; continue _fun00013 }
 23:
            if(!(entity != romeon)) { _fun00014_ip = 214; continue _fun00013 }
 30:
            backup = 'online';
            michal = 0;
            foxtra = backup;
            if(!(michal === yankee)) { _fun00014_ip = 54; continue _fun00013 }
 43:
            foxtra = backup;
            if(!(entity !== romeon)) { _fun00014_ip = 54; continue _fun00013 }
 50:
            foxtra = 'total';
 54:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot12;
            michal = {};
            offset = _closure1_slot11;
            golfie = _closure1_slot1;
            kiloes = _closure1_slot2;
            oscard = 18;
            oscard = kiloes[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard['type'] = foxtra;
            if(!(backup === foxtra)) { _fun00014_ip = 104; continue _fun00013 }
 101:
            romeon = yankee;
 104:
            foxtra = entity != romeon;
            yankee = undefined;
            if(!foxtra) { _fun00014_ip = 116; continue _fun00013 }
 113:
            yankee = romeon;
 116:
            oscard['count'] = yankee;
            yankee = 'text-muted';
            oscard['color'] = yankee;
            golfie = offset.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = null;
            if(!verify) { _fun00014_ip = 198; continue _fun00013 }
 149:
            offset = _closure1_slot11;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 12;
            option = yankee[option];
            option = verify.bind(report)(option);
            verify = option.Text;
            option = {'variant': 'text-xs/medium', 'color': 'divider-subtle', 'children': '•'};
            golfie = offset.bind(report)(verify, option);
 198:
            oscard[1] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 214:
            return entity;
        }
    };
    zuuluu['renderMemberCountText'] = tangon;
    tangon = function(argFoo) { // Original name: renderParentChannelSubTitle
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot21;
        michal = {};
        entity = argFoo;
        michal['channel'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['renderParentChannelSubTitle'] = tangon;
    tangon = function() { // Original name: renderEmptyIcon
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot22;
        michal = undefined;
        entity = {};
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    zuuluu['renderEmptyIcon'] = tangon;
    michal = function(argFoo) { // Original name: EventsActionButton
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            offset = michal.guild;
            var _closure2_slot0 = offset;
            michal = _closure1_slot14;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 21;
            michal = romeon[michal];
            zuuluu = yankee.bind(tangon)(michal);
            michal = offset.id;
            michal = zuuluu.bind(tangon)(michal);
            golfie = michal.length;
            foxtra = _closure1_slot0;
            michal = 22;
            michal = romeon[michal];
            verify = foxtra.bind(tangon)(michal);
            report = verify.useStateFromStores;
            michal = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                tangon = _closure1_slot7;
                zuuluu = tangon.hasUnread;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure1_slot10;
                entity = entity.GUILD_EVENT;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            verify = report.bind(verify)(zuuluu, michal);
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = new Array(1);
            michal[0] = offset;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openGuildEventListActionSheet;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot11;
            entity = 24;
            entity = romeon[entity];
            michal = yankee.bind(tangon)(entity);
            entity = {};
            offset = 25;
            offset = romeon[offset];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.CalendarIcon;
            entity['IconComponent'] = offset;
            offset = 26;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            entity['source'] = offset;
            entity['onPress'] = report;
            report = 0;
            if(!(!(golfie > report))) { _fun00016_ip = 258; continue _fun00015 }
 201:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 19;
            yankee = backup[offset];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = backup[offset];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.t;
            offset = offset.tlopTE;
            offset = yankee.bind(romeon)(offset);
            _fun00016_ip = 321; continue _fun00015;
 258:
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 19;
            foxtra = kiloes[yankee];
            foxtra = romeon.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.formatToPlainString;
            yankee = kiloes[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.t;
            romeon = yankee.IBdqSk;
            yankee = {};
            yankee['number'] = golfie;
            offset = foxtra.bind(backup)(romeon, yankee);
 321:
            entity['accessibilityLabel'] = offset;
            entity['badge'] = verify;
            offset = golfie > report;
            verify = undefined;
            if(!offset) { _fun00016_ip = 348; continue _fun00015 }
 339:
            offset = golfie.toString;
            verify = offset.bind(golfie)();
 348:
            entity['buttonText'] = verify;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 9;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.spacing;
            option = option.PX_4;
            entity['hitSlop'] = option;
            golfie = golfie > report;
            report = null;
            if(!golfie) { _fun00016_ip = 404; continue _fun00015 }
 398:
            report = oscard.eventsActionButtonWithText;
 404:
            entity['style'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['EventsActionButton'] = michal;
    return entity;
})();