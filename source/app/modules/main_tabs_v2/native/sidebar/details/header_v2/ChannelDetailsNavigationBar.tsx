// app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: navigateToChannelDetailsScreen
        tangon = argFoo;
        zuuluu = tangon.navigate;
        michal = {};
        entity = argBar;
        michal['screen'] = entity;
        entity = argBaz;
        michal['channelId'] = entity;
        entity = 'channel-details-navigation-bar';
        michal['source'] = entity;
        entity = 'sidebar';
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: getItemKey
        entity = argFoo;
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = option;
    tangon = tangon.useIsChannelDetailsSearchActive;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ChannelDetailsButtonTypes;
    var _closure1_slot10 = option;
    tangon = tangon.ChannelDetailsNavigatorScreens;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelSettingsSections;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot13 = option;
    tangon = tangon.jsxs;
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'position': 'relative', 'zIndex': 1};
    backup = 10;
    yankee = oscard[backup];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.SEARCH_BAR_HEIGHT;
    offset['height'] = yankee;
    tangon['container'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': null, 'paddingVertical': null, 'position': 'absolute'};
    romeon = 11;
    yankee = oscard[romeon];
    yankee = foxtra.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    offset['paddingHorizontal'] = yankee;
    yankee = oscard[romeon];
    yankee = foxtra.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_4;
    offset['paddingVertical'] = yankee;
    yankee = 'absolute';
    backup = oscard[backup];
    backup = report.bind(entity)(backup);
    backup = backup.SEARCH_BAR_HEIGHT;
    offset['height'] = backup;
    tangon['navigationHeader'] = offset;
    offset = {'flex': 1, 'flexDirection': 'row', 'gap': null, 'justifyContent': 'flex-end'};
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_12;
    offset['gap'] = romeon;
    tangon['buttonsContainer'] = offset;
    offset = {};
    offset['position'] = yankee;
    tangon['searchHeader'] = offset;
    offset = {};
    offset['position'] = yankee;
    tangon['navItem'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot15 = tangon;
    tangon = {};
    option = 'buttons';
    tangon['BUTTONS'] = option;
    option = 'search';
    tangon['SEARCH'] = option;
    var _closure1_slot16 = tangon;
    tangon = function(argFoo) { // Original name: MuteButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.channelId;
            var _closure2_slot0 = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 12;
            zuuluu = romeon[zuuluu];
            report = undefined;
            golfie = yankee.bind(report)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(3);
            tangon[0] = zuuluu;
            zuuluu = _closure1_slot5;
            tangon[1] = zuuluu;
            zuuluu = _closure1_slot7;
            tangon[2] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.getChannel;
                    entity = _closure2_slot0;
                    zuuluu = michal.bind(zuuluu)(entity);
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 102; continue _fun00003 }
 33:
                    michal = zuuluu.isThread;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00004_ip = 79; continue _fun00003 }
 46:
                    golfie = _closure1_slot7;
                    oscard = golfie.isChannelMuted;
                    michal = zuuluu.getGuildId;
                    report = michal.bind(zuuluu)();
                    michal = zuuluu.id;
                    michal = oscard.bind(golfie)(report, michal);
                    _fun00004_ip = 99; continue _fun00003;
 79:
                    report = _closure1_slot5;
                    tangon = report.isMuted;
                    zuuluu = zuuluu.id;
                    michal = tangon.bind(report)(zuuluu);
 99:
                    entity = michal;
 102:
                    return entity;
                }
            };
            oscard = oscard.bind(golfie)(tangon, zuuluu);
            zuuluu = 13;
            zuuluu = romeon[zuuluu];
            tangon = yankee.bind(report)(zuuluu);
            zuuluu = tangon.useNavigation;
            option = zuuluu.bind(tangon)();
            var _closure2_slot1 = option;
            golfie = _closure1_slot3;
            tangon = golfie.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = option;
            michal = function() {
                report = _closure1_slot26;
                tangon = _closure2_slot1;
                michal = _closure1_slot11;
                zuuluu = michal.MUTE;
                michal = _closure2_slot0;
                entity = undefined;
                michal = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            golfie = tangon.bind(golfie)(michal, zuuluu);
            tangon = _closure1_slot13;
            michal = 14;
            michal = romeon[michal];
            michal = yankee.bind(report)(michal);
            zuuluu = michal.IconButton;
            michal = {};
            option = 15;
            verify = romeon[option];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(report)(option);
            option = option.t;
            option = option.w4m94+;
            option = verify.bind(offset)(option);
            michal['accessibilityLabel'] = option;
            michal['onPress'] = golfie;
            golfie = 'tertiary';
            michal['variant'] = golfie;
            golfie = 'sm';
            michal['size'] = golfie;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            if(oscard) { _fun00002_ip = 262; continue _fun00001 }
 253:
            oscard = 17;
            oscard = verify[oscard];
            _fun00002_ip = 269; continue _fun00001;
 262:
            option = 16;
            oscard = verify[option];
 269:
            oscard = golfie.bind(report)(oscard);
            michal['icon'] = oscard;
            entity = _closure1_slot10;
            entity = entity.MUTE;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        }
    };
    var _closure1_slot17 = tangon;
    tangon = function(argFoo) { // Original name: SearchButton
        entity = argFoo;
        oscard = entity.channelId;
        var _closure2_slot0 = oscard;
        report = _closure1_slot3;
        tangon = report.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            report = _closure1_slot8;
            tangon = _closure2_slot0;
            entity = undefined;
            zuuluu = true;
            michal = 'action';
            michal = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        oscard = tangon.bind(report)(michal, zuuluu);
        report = _closure1_slot13;
        yankee = _closure1_slot0;
        option = _closure1_slot2;
        michal = 14;
        michal = option[michal];
        tangon = undefined;
        michal = yankee.bind(tangon)(michal);
        zuuluu = michal.IconButton;
        michal = {};
        golfie = 15;
        verify = option[golfie];
        verify = yankee.bind(tangon)(verify);
        offset = verify.intl;
        verify = offset.string;
        golfie = option[golfie];
        golfie = yankee.bind(tangon)(golfie);
        golfie = golfie.t;
        golfie = golfie.5h0QOD;
        golfie = verify.bind(offset)(golfie);
        michal['accessibilityLabel'] = golfie;
        michal['onPress'] = oscard;
        oscard = 'tertiary';
        michal['variant'] = oscard;
        oscard = 'sm';
        michal['size'] = oscard;
        golfie = _closure1_slot1;
        oscard = 18;
        oscard = option[oscard];
        oscard = golfie.bind(tangon)(oscard);
        michal['icon'] = oscard;
        entity = _closure1_slot10;
        entity = entity.SEARCH;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    var _closure1_slot18 = tangon;
    tangon = function(argFoo) { // Original name: SettingsButton
        entity = argFoo;
        verify = entity.channel;
        var _closure2_slot0 = verify;
        yankee = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 13;
        zuuluu = option[zuuluu];
        report = undefined;
        tangon = yankee.bind(report)(zuuluu);
        zuuluu = tangon.useNavigation;
        golfie = zuuluu.bind(tangon)();
        var _closure2_slot1 = golfie;
        oscard = _closure1_slot3;
        tangon = oscard.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = verify;
        zuuluu[1] = golfie;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 172; continue _fun00005 }
 16:
                zuuluu = _closure2_slot0;
                michal = zuuluu.isDM;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00006_ip = 127; continue _fun00005 }
 33:
                zuuluu = _closure2_slot0;
                michal = zuuluu.isMultiUserDM;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00006_ip = 127; continue _fun00005 }
 50:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                michal = 20;
                michal = report[michal];
                oscard = undefined;
                golfie = tangon.bind(oscard)(michal);
                report = golfie.init;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(golfie)(tangon);
                report = _closure1_slot26;
                tangon = _closure2_slot1;
                zuuluu = _closure1_slot12;
                zuuluu = zuuluu.OVERVIEW;
                michal = michal.id;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                _fun00006_ip = 172; continue _fun00005;
 127:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 19;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.openChannelLongPressActionSheet;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
 172:
                entity = undefined;
                return entity;
            }
        };
        oscard = tangon.bind(oscard)(michal, zuuluu);
        tangon = _closure1_slot13;
        michal = 14;
        michal = option[michal];
        michal = yankee.bind(report)(michal);
        zuuluu = michal.IconButton;
        michal = {'accessibilityLabel': null, 'onPress': null, 'accessibilityRole': 'button', 'variant': 'tertiary', 'size': 'sm'};
        golfie = 15;
        verify = option[golfie];
        verify = yankee.bind(report)(verify);
        offset = verify.intl;
        verify = offset.string;
        golfie = option[golfie];
        golfie = yankee.bind(report)(golfie);
        golfie = golfie.t;
        golfie = golfie.3D5yo6;
        golfie = verify.bind(offset)(golfie);
        michal['accessibilityLabel'] = golfie;
        michal['onPress'] = oscard;
        golfie = _closure1_slot1;
        oscard = 21;
        oscard = option[oscard];
        oscard = golfie.bind(report)(oscard);
        michal['icon'] = oscard;
        entity = _closure1_slot10;
        entity = entity.SETTINGS;
        entity = tangon.bind(report)(zuuluu, michal, entity);
        return entity;
    };
    var _closure1_slot19 = tangon;
    tangon = {};
    option = "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}";
    tangon['code'] = option;
    var _closure1_slot20 = tangon;
    tangon = {};
    option = 'function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}';
    tangon['code'] = option;
    var _closure1_slot21 = tangon;
    option = golfie.forwardRef;
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        offset = entity.channel;
        verify = entity.onSuggestionsLayoutMeasure;
        option = entity.suggestionsDismissed;
        golfie = entity.setSuggestionsDismissed;
        oscard = entity.transitionState;
        backup = entity.width;
        var _closure2_slot0 = backup;
        kiloes = entity.cleanUp;
        var _closure2_slot1 = kiloes;
        entity = _closure1_slot15;
        tangon = undefined;
        report = entity.bind(tangon)();
        output = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 23;
        entity = yankee[entity];
        entity = output.bind(tangon)(entity);
        entity = entity.TransitionStates;
        entity = entity.YEETED;
        sizing = oscard !== entity;
        var _closure2_slot2 = sizing;
        entity = 24;
        oscard = yankee[entity];
        romeon = output.bind(tangon)(oscard);
        oscard = romeon.useAnimatedStyle;
        zuuluu = function() { // Original name: S
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = {};
                tangon = _closure2_slot2;
                zuuluu = 'none';
                if(!tangon) { _fun00008_ip = 20; continue _fun00007 }
 16:
                zuuluu = 'auto';
 20:
                entity['pointerEvents'] = zuuluu;
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 25;
                tangon = oscard[tangon];
                romeon = undefined;
                option = report.bind(romeon)(tangon);
                golfie = option.withTiming;
                tangon = _closure2_slot2;
                oscard = 0;
                if(!tangon) { _fun00008_ip = 67; continue _fun00007 }
 64:
                oscard = 1;
 67:
                report = {};
                tangon = 200;
                report['duration'] = tangon;
                yankee = _closure1_slot0;
                foxtra = _closure1_slot2;
                offset = 24;
                tangon = foxtra[offset];
                tangon = yankee.bind(romeon)(tangon);
                sizing = tangon.Easing;
                kiloes = sizing.bezier;
                backup = 0.25;
                echoed = 0.1;
                output = 1;
                source = sizing;
                update = backup;
                result = backup;
                tangon = source[kiloes](update, echoed, result, output, sizing);
                report['easing'] = tangon;
                tangon = function(argFoo) { // Original name: n
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00010_ip = 52; continue _fun00009 }
 6:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 24;
                        entity = michal[entity];
                        michal = undefined;
                        tangon = zuuluu.bind(michal)(entity);
                        zuuluu = tangon.runOnJS;
                        entity = _closure2_slot1;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.bind(michal)();
 52:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = {};
                offset = foxtra[offset];
                offset = yankee.bind(romeon)(offset);
                offset = offset.runOnJS;
                verify['runOnJS'] = offset;
                offset = _closure2_slot1;
                verify['cleanUp'] = offset;
                tangon['__closure'] = verify;
                verify = 10411737901360.0;
                tangon['__workletHash'] = verify;
                zuuluu = _closure1_slot21;
                tangon['__initData'] = zuuluu;
                result = 'animate-always';
                source = option;
                update = oscard;
                echoed = report;
                output = tangon;
                zuuluu = source[golfie](update, echoed, result, output, sizing);
                entity['opacity'] = zuuluu;
                michal = _closure2_slot0;
                entity['width'] = michal;
                return entity;
            }
        };
        foxtra = {};
        foxtra['isActive'] = sizing;
        sizing = 25;
        sizing = yankee[sizing];
        sizing = output.bind(tangon)(sizing);
        sizing = sizing.withTiming;
        foxtra['withTiming'] = sizing;
        sizing = yankee[entity];
        sizing = output.bind(tangon)(sizing);
        sizing = sizing.Easing;
        foxtra['Easing'] = sizing;
        sizing = yankee[entity];
        sizing = output.bind(tangon)(sizing);
        sizing = sizing.runOnJS;
        foxtra['runOnJS'] = sizing;
        foxtra['cleanUp'] = kiloes;
        foxtra['width'] = backup;
        zuuluu['__closure'] = foxtra;
        foxtra = 1270940013897.0;
        zuuluu['__workletHash'] = foxtra;
        foxtra = _closure1_slot20;
        zuuluu['__initData'] = foxtra;
        romeon = oscard.bind(romeon)(zuuluu);
        zuuluu = _closure1_slot13;
        oscard = _closure1_slot1;
        entity = yankee[entity];
        entity = oscard.bind(tangon)(entity);
        michal = entity.View;
        entity = {};
        foxtra = report.searchHeader;
        report = new Array(2);
        report[0] = foxtra;
        report[1] = romeon;
        entity['style'] = report;
        report = 26;
        report = yankee[report];
        oscard = oscard.bind(tangon)(report);
        report = {};
        yankee = argBar;
        report['ref'] = yankee;
        yankee = offset.id;
        report['channelId'] = yankee;
        offset = offset.guild_id;
        report['guildId'] = offset;
        report['onSuggestionsLayoutMesure'] = verify;
        report['suggestionsDismissed'] = option;
        report['setSuggestionsDismissed'] = golfie;
        golfie = true;
        report['showBackButton'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot22 = tangon;
    tangon = {};
    option = "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}";
    tangon['code'] = option;
    var _closure1_slot23 = tangon;
    tangon = {};
    option = 'function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}';
    tangon['code'] = option;
    var _closure1_slot24 = tangon;
    tangon = function(argFoo) { // Original name: NavigationHeader
        entity = argFoo;
        michal = entity.channel;
        var _closure2_slot0 = michal;
        yankee = entity.onBackPress;
        report = entity.transitionState;
        foxtra = entity.width;
        var _closure2_slot1 = foxtra;
        backup = entity.cleanUp;
        var _closure2_slot2 = backup;
        entity = _closure1_slot15;
        tangon = undefined;
        offset = entity.bind(tangon)();
        romeon = _closure1_slot0;
        kiloes = _closure1_slot2;
        entity = 23;
        entity = kiloes[entity];
        entity = romeon.bind(tangon)(entity);
        entity = entity.TransitionStates;
        entity = entity.YEETED;
        sizing = report < entity;
        var _closure2_slot3 = sizing;
        entity = 24;
        report = kiloes[entity];
        option = romeon.bind(tangon)(report);
        golfie = option.useAnimatedStyle;
        report = function() { // Original name: h
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = {};
                tangon = _closure2_slot3;
                zuuluu = 'none';
                if(!tangon) { _fun00012_ip = 20; continue _fun00011 }
 16:
                zuuluu = 'auto';
 20:
                entity['pointerEvents'] = zuuluu;
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 25;
                tangon = oscard[tangon];
                romeon = undefined;
                option = report.bind(romeon)(tangon);
                golfie = option.withTiming;
                tangon = _closure2_slot3;
                oscard = 0;
                if(!tangon) { _fun00012_ip = 67; continue _fun00011 }
 64:
                oscard = 1;
 67:
                yankee = _closure1_slot0;
                foxtra = _closure1_slot2;
                tangon = 27;
                tangon = foxtra[tangon];
                tangon = yankee.bind(romeon)(tangon);
                sizing = tangon.timingFast;
                tangon = function(argFoo) { // Original name: n
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00014_ip = 52; continue _fun00013 }
 6:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 24;
                        entity = michal[entity];
                        michal = undefined;
                        tangon = zuuluu.bind(michal)(entity);
                        zuuluu = tangon.runOnJS;
                        entity = _closure2_slot2;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.bind(michal)();
 52:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = {};
                offset = 24;
                offset = foxtra[offset];
                offset = yankee.bind(romeon)(offset);
                offset = offset.runOnJS;
                verify['runOnJS'] = offset;
                offset = _closure2_slot2;
                verify['cleanUp'] = offset;
                tangon['__closure'] = verify;
                verify = 17272451769590.0;
                tangon['__workletHash'] = verify;
                zuuluu = _closure1_slot24;
                tangon['__initData'] = zuuluu;
                kiloes = 'animate-always';
                result = option;
                output = oscard;
                backup = tangon;
                zuuluu = result[golfie](output, sizing, kiloes, backup, foxtra);
                entity['opacity'] = zuuluu;
                michal = _closure2_slot1;
                entity['width'] = michal;
                return entity;
            }
        };
        verify = {};
        verify['isActive'] = sizing;
        sizing = 25;
        sizing = kiloes[sizing];
        sizing = romeon.bind(tangon)(sizing);
        sizing = sizing.withTiming;
        verify['withTiming'] = sizing;
        sizing = 27;
        sizing = kiloes[sizing];
        sizing = romeon.bind(tangon)(sizing);
        sizing = sizing.timingFast;
        verify['timingFast'] = sizing;
        sizing = kiloes[entity];
        sizing = romeon.bind(tangon)(sizing);
        sizing = sizing.runOnJS;
        verify['runOnJS'] = sizing;
        verify['cleanUp'] = backup;
        verify['width'] = foxtra;
        report['__closure'] = verify;
        verify = 15139742229370.0;
        report['__workletHash'] = verify;
        verify = _closure1_slot23;
        report['__initData'] = verify;
        golfie = golfie.bind(option)(report);
        option = _closure1_slot3;
        verify = option.useMemo;
        report = new Array(1);
        report[0] = michal;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 28;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.getChannelDetailsButtons;
            entity = _closure2_slot0;
            michal = entity.type;
            entity = true;
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    oscard = argFoo;
                    michal = _closure2_slot0;
                    entity = _closure1_slot10;
                    entity = entity.SEARCH;
                    if(!(entity !== oscard)) { _fun00016_ip = 173; continue _fun00015 }
 30:
                    entity = _closure1_slot10;
                    entity = entity.MUTE;
                    if(!(entity !== oscard)) { _fun00016_ip = 143; continue _fun00015 }
 44:
                    entity = _closure1_slot10;
                    entity = entity.SETTINGS;
                    if(!(entity !== oscard)) { _fun00016_ip = 118; continue _fun00015 }
 58:
                    entity = _closure1_slot10;
                    tangon = entity.MORE;
                    option = undefined;
                    entity = undefined;
                    if(!(tangon === oscard)) { _fun00016_ip = 201; continue _fun00015 }
 79:
                    golfie = _closure1_slot13;
                    report = _closure1_slot1;
                    verify = _closure1_slot2;
                    tangon = 22;
                    tangon = verify[tangon];
                    report = report.bind(option)(tangon);
                    tangon = {};
                    tangon['channel'] = michal;
                    entity = golfie.bind(option)(report, tangon, oscard);
                    _fun00016_ip = 201; continue _fun00015;
 118:
                    option = _closure1_slot13;
                    golfie = _closure1_slot19;
                    report = {};
                    report['channel'] = michal;
                    tangon = undefined;
                    entity = option.bind(tangon)(golfie, report, oscard);
                    _fun00016_ip = 201; continue _fun00015;
 143:
                    option = _closure1_slot13;
                    golfie = _closure1_slot17;
                    report = {};
                    tangon = michal.id;
                    report['channelId'] = tangon;
                    tangon = undefined;
                    entity = option.bind(tangon)(golfie, report, oscard);
                    _fun00016_ip = 201; continue _fun00015;
 173:
                    report = _closure1_slot13;
                    tangon = _closure1_slot18;
                    zuuluu = {};
                    michal = michal.id;
                    zuuluu['channelId'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu, oscard);
 201:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        verify = verify.bind(option)(zuuluu, report);
        zuuluu = 28;
        zuuluu = kiloes[zuuluu];
        report = romeon.bind(tangon)(zuuluu);
        zuuluu = report.useShouldShowCoachmark;
        michal = michal.id;
        zuuluu = zuuluu.bind(report)(michal);
        report = option.useRef;
        michal = null;
        foxtra = report.bind(option)(michal);
        backup = _closure1_slot1;
        michal = 29;
        michal = kiloes[michal];
        michal = backup.bind(tangon)(michal);
        michal = michal.bind(tangon)(foxtra, zuuluu);
        zuuluu = _closure1_slot14;
        entity = kiloes[entity];
        entity = backup.bind(tangon)(entity);
        michal = entity.View;
        entity = {};
        option = offset.navigationHeader;
        report = new Array(2);
        report[0] = option;
        report[1] = golfie;
        entity['style'] = report;
        option = _closure1_slot13;
        report = 30;
        report = kiloes[report];
        report = romeon.bind(tangon)(report);
        golfie = report.PressableOpacity;
        report = {};
        report['ref'] = foxtra;
        foxtra = 15;
        sizing = kiloes[foxtra];
        sizing = romeon.bind(tangon)(sizing);
        output = sizing.intl;
        sizing = output.string;
        foxtra = kiloes[foxtra];
        foxtra = romeon.bind(tangon)(foxtra);
        foxtra = foxtra.t;
        foxtra = foxtra.13/7kZ;
        foxtra = sizing.bind(output)(foxtra);
        report['accessibilityLabel'] = foxtra;
        report['onPress'] = yankee;
        yankee = 31;
        yankee = kiloes[yankee];
        yankee = romeon.bind(tangon)(yankee);
        romeon = yankee.ArrowLargeLeftIcon;
        yankee = {};
        foxtra = 11;
        foxtra = kiloes[foxtra];
        foxtra = backup.bind(tangon)(foxtra);
        foxtra = foxtra.colors;
        foxtra = foxtra.INTERACTIVE_NORMAL;
        yankee['color'] = foxtra;
        yankee = option.bind(tangon)(romeon, yankee);
        report['children'] = yankee;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        golfie = _closure1_slot4;
        oscard = {};
        offset = offset.buttonsContainer;
        oscard['style'] = offset;
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot25 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        michal = argFoo;
        golfie = argBar;
        foxtra = michal.channel;
        var _closure2_slot0 = foxtra;
        romeon = michal.onBackPress;
        var _closure2_slot1 = romeon;
        yankee = michal.componentWidth;
        var _closure2_slot2 = yankee;
        offset = michal.searchBarLayoutProps;
        var _closure2_slot3 = offset;
        var _closure2_slot4 = golfie;
        michal = _closure1_slot15;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot9;
        michal = foxtra.id;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot5 = michal;
        oscard = _closure1_slot3;
        verify = oscard.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = _closure2_slot5;
                michal = _closure1_slot16;
                if(entity) { _fun00018_ip = 33; continue _fun00017 }
 17:
                zuuluu = michal.BUTTONS;
                entity = new Array(1);
                entity[0] = zuuluu;
                _fun00018_ip = 50; continue _fun00017;
 33:
                zuuluu = michal.SEARCH;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 50:
                return entity;
            }
        };
        verify = verify.bind(oscard)(michal, zuuluu);
        zuuluu = oscard.useCallback;
        michal = new Array(5);
        michal[0] = foxtra;
        michal[1] = romeon;
        michal[2] = yankee;
        michal[3] = offset;
        michal[4] = golfie;
        entity = function(argFoo, argBar, argBaz, argCor) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                golfie = argBaz;
                entity = argCor;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.BUTTONS;
                if(!(zuuluu !== tangon)) { _fun00020_ip = 129; continue _fun00019 }
 29:
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.SEARCH;
                if(!(zuuluu !== tangon)) { _fun00020_ip = 47; continue _fun00019 }
 43:
                zuuluu = undefined;
                return zuuluu;
 47:
                option = _closure1_slot13;
                oscard = _closure1_slot22;
                tangon = {};
                verify = _closure2_slot4;
                tangon['ref'] = verify;
                verify = _closure2_slot0;
                tangon['channel'] = verify;
                yankee = _closure2_slot3;
                romeon = tangon;
                verify = copyDataProperties(romeon, yankee);
                verify = 'transitionState';
                tangon[verify] = golfie;
                verify = _closure2_slot2;
                zuuluu = 'width';
                tangon[zuuluu] = verify;
                zuuluu = 'cleanUp';
                tangon[zuuluu] = entity;
                zuuluu = undefined;
                zuuluu = option.bind(zuuluu)(oscard, tangon, report);
                return zuuluu;
 129:
                tangon = _closure1_slot13;
                zuuluu = _closure1_slot25;
                michal = {};
                option = _closure2_slot0;
                michal['channel'] = option;
                option = _closure2_slot1;
                michal['onBackPress'] = option;
                michal['transitionState'] = golfie;
                oscard = _closure2_slot2;
                michal['width'] = oscard;
                michal['cleanUp'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal, report);
                return entity;
            }
        };
        golfie = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot13;
        michal = _closure1_slot4;
        entity = {};
        report = report.container;
        entity['style'] = report;
        oscard = _closure1_slot0;
        offset = _closure1_slot2;
        report = 23;
        report = offset[report];
        report = oscard.bind(tangon)(report);
        oscard = report.TransitionGroup;
        report = {};
        report['items'] = verify;
        option = _closure1_slot27;
        report['getItemKey'] = option;
        report['renderItem'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = tangon.bind(golfie)(michal);
    michal = golfie.memo;
    michal = michal.bind(golfie)(tangon);
    tangon = 32;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();