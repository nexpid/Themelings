// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsButtons.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ChannelDetailsButton
        entity = argFoo;
        option = entity.icon;
        offset = entity.label;
        verify = entity.onPress;
        entity = _closure1_slot19;
        tangon = undefined;
        oscard = entity.bind(tangon)();
        zuuluu = _closure1_slot17;
        michal = _closure1_slot4;
        entity = {};
        oscard = oscard.button;
        entity['style'] = oscard;
        golfie = _closure1_slot17;
        oscard = _closure1_slot0;
        yankee = _closure1_slot2;
        report = 12;
        report = yankee[report];
        report = oscard.bind(tangon)(report);
        oscard = report.IconButton;
        report = {};
        report['label'] = offset;
        report['onPress'] = verify;
        verify = 'secondary';
        report['variant'] = verify;
        report['icon'] = option;
        option = 2;
        report['maxFontSizeMultiplier'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: SearchButton
        michal = argFoo;
        oscard = michal.channelId;
        var _closure2_slot0 = oscard;
        tangon = _closure1_slot3;
        zuuluu = tangon.useCallback;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            report = _closure1_slot8;
            tangon = _closure2_slot0;
            entity = undefined;
            zuuluu = true;
            michal = 'action';
            michal = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        tangon = _closure1_slot17;
        zuuluu = _closure1_slot26;
        michal = {};
        michal['onPress'] = entity;
        offset = _closure1_slot0;
        golfie = _closure1_slot2;
        oscard = 13;
        option = golfie[oscard];
        entity = undefined;
        option = offset.bind(entity)(option);
        verify = option.intl;
        option = verify.string;
        oscard = golfie[oscard];
        oscard = offset.bind(entity)(oscard);
        oscard = oscard.t;
        oscard = oscard.5h0QOD;
        oscard = option.bind(verify)(oscard);
        michal['label'] = oscard;
        oscard = _closure1_slot1;
        report = 14;
        report = golfie[report];
        report = oscard.bind(entity)(report);
        michal['icon'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: SettingsButton
        michal = argFoo;
        verify = michal.channelId;
        var _closure2_slot0 = verify;
        offset = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 15;
        michal = golfie[michal];
        tangon = undefined;
        zuuluu = offset.bind(tangon)(michal);
        michal = zuuluu.useNavigation;
        option = michal.bind(zuuluu)();
        var _closure2_slot1 = option;
        oscard = _closure1_slot3;
        zuuluu = oscard.useCallback;
        michal = new Array(2);
        michal[0] = verify;
        michal[1] = option;
        entity = function() {
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 16;
            zuuluu = oscard[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.init;
            golfie = _closure2_slot0;
            tangon = tangon.bind(report)(golfie);
            report = _closure1_slot0;
            tangon = 17;
            tangon = oscard[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.navigateToChannelDetailsScreen;
            yankee = _closure2_slot1;
            michal = _closure1_slot16;
            offset = michal.OVERVIEW;
            option = 'channel-details-button';
            romeon = oscard;
            verify = golfie;
            michal = romeon[report](yankee, offset, verify, option, golfie);
            return entity;
        };
        oscard = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot17;
        michal = _closure1_slot26;
        entity = {};
        entity['onPress'] = oscard;
        oscard = 13;
        option = golfie[oscard];
        option = offset.bind(tangon)(option);
        verify = option.intl;
        option = verify.string;
        oscard = golfie[oscard];
        oscard = offset.bind(tangon)(oscard);
        oscard = oscard.t;
        oscard = oscard.3D5yo6;
        oscard = option.bind(verify)(oscard);
        entity['label'] = oscard;
        oscard = _closure1_slot1;
        report = 18;
        report = golfie[report];
        report = oscard.bind(tangon)(report);
        entity['icon'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: MuteButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            verify = michal.channelId;
            var _closure2_slot0 = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 19;
            michal = romeon[michal];
            tangon = undefined;
            oscard = yankee.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot6;
            zuuluu = new Array(3);
            zuuluu[0] = michal;
            michal = _closure1_slot5;
            zuuluu[1] = michal;
            michal = _closure1_slot7;
            zuuluu[2] = michal;
            michal = function() {
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
            report = report.bind(oscard)(zuuluu, michal);
            michal = 15;
            michal = romeon[michal];
            zuuluu = yankee.bind(tangon)(michal);
            michal = zuuluu.useNavigation;
            option = michal.bind(zuuluu)();
            var _closure2_slot1 = option;
            oscard = _closure1_slot3;
            zuuluu = oscard.useCallback;
            michal = new Array(2);
            michal[0] = verify;
            michal[1] = option;
            entity = function() {
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                golfie = tangon.bind(entity)(michal);
                oscard = golfie.navigateToChannelDetailsScreen;
                yankee = _closure2_slot1;
                zuuluu = _closure1_slot14;
                offset = zuuluu.MUTE;
                verify = _closure2_slot0;
                option = 'channel-details-button';
                romeon = golfie;
                michal = romeon[oscard](yankee, offset, verify, option, golfie);
                return entity;
            };
            oscard = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot17;
            michal = _closure1_slot26;
            entity = {};
            option = 13;
            verify = romeon[option];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.t;
            option = option.w4m94+;
            option = verify.bind(offset)(option);
            entity['label'] = option;
            entity['onPress'] = oscard;
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            if(report) { _fun00002_ip = 230; continue _fun00001 }
 221:
            report = 21;
            report = option[report];
            _fun00002_ip = 237; continue _fun00001;
 230:
            golfie = 20;
            report = option[golfie];
 237:
            report = oscard.bind(tangon)(report);
            entity['icon'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: ThreadsButton
        michal = argFoo;
        verify = michal.channelId;
        var _closure2_slot0 = verify;
        offset = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 15;
        michal = golfie[michal];
        tangon = undefined;
        zuuluu = offset.bind(tangon)(michal);
        michal = zuuluu.useNavigation;
        option = michal.bind(zuuluu)();
        var _closure2_slot1 = option;
        oscard = _closure1_slot3;
        zuuluu = oscard.useCallback;
        michal = new Array(2);
        michal[0] = verify;
        michal[1] = option;
        entity = function() {
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 22;
            michal = report[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(michal);
            michal = oscard.trackThreadBrowserOpened;
            michal = michal.bind(oscard)();
            michal = 17;
            michal = report[michal];
            golfie = tangon.bind(entity)(michal);
            oscard = golfie.navigateToChannelDetailsScreen;
            yankee = _closure2_slot1;
            zuuluu = _closure1_slot14;
            offset = zuuluu.THREADS;
            verify = _closure2_slot0;
            option = 'channel-details-button';
            romeon = golfie;
            michal = romeon[oscard](yankee, offset, verify, option, golfie);
            return entity;
        };
        oscard = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot17;
        michal = _closure1_slot26;
        entity = {};
        entity['onPress'] = oscard;
        oscard = 13;
        option = golfie[oscard];
        option = offset.bind(tangon)(option);
        verify = option.intl;
        option = verify.string;
        oscard = golfie[oscard];
        oscard = offset.bind(tangon)(oscard);
        oscard = oscard.t;
        oscard = oscard.B2panJ;
        oscard = option.bind(verify)(oscard);
        entity['label'] = oscard;
        oscard = _closure1_slot1;
        report = 23;
        report = golfie[report];
        report = oscard.bind(tangon)(report);
        entity['icon'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: ChannelDetailsButtons
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = michal.channel;
            var _closure2_slot0 = tangon;
            zuuluu = _closure1_slot19;
            report = undefined;
            zuuluu = zuuluu.bind(report)();
            var _closure2_slot1 = zuuluu;
            option = _closure1_slot3;
            golfie = option.useMemo;
            verify = tangon.id;
            oscard = new Array(2);
            oscard[0] = verify;
            tangon = tangon.type;
            oscard[1] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getChannelDetailsButtons;
                entity = _closure2_slot0;
                michal = entity.type;
                entity = false;
                zuuluu = zuuluu.bind(tangon)(michal, entity);
                michal = zuuluu.map;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        report = argFoo;
                        entity = _closure2_slot0;
                        michal = entity.id;
                        entity = _closure1_slot13;
                        entity = entity.SEARCH;
                        if(!(entity !== report)) { _fun00008_ip = 166; continue _fun00007 }
 35:
                        entity = _closure1_slot13;
                        entity = entity.THREADS;
                        if(!(entity !== report)) { _fun00008_ip = 137; continue _fun00007 }
 49:
                        entity = _closure1_slot13;
                        entity = entity.MUTE;
                        if(!(entity !== report)) { _fun00008_ip = 108; continue _fun00007 }
 63:
                        entity = _closure1_slot13;
                        tangon = entity.SETTINGS;
                        option = undefined;
                        entity = undefined;
                        if(!(tangon === report)) { _fun00008_ip = 193; continue _fun00007 }
 81:
                        golfie = _closure1_slot17;
                        oscard = _closure1_slot28;
                        report = {};
                        report['channelId'] = michal;
                        tangon = 'settings';
                        entity = golfie.bind(option)(oscard, report, tangon);
                        _fun00008_ip = 193; continue _fun00007;
 108:
                        option = _closure1_slot17;
                        golfie = _closure1_slot29;
                        oscard = {};
                        oscard['channelId'] = michal;
                        report = undefined;
                        tangon = 'mute';
                        entity = option.bind(report)(golfie, oscard, tangon);
                        _fun00008_ip = 193; continue _fun00007;
 137:
                        option = _closure1_slot17;
                        golfie = _closure1_slot30;
                        oscard = {};
                        oscard['channelId'] = michal;
                        report = undefined;
                        tangon = 'threads';
                        entity = option.bind(report)(golfie, oscard, tangon);
                        _fun00008_ip = 193; continue _fun00007;
 166:
                        oscard = _closure1_slot17;
                        report = _closure1_slot27;
                        tangon = {};
                        tangon['channelId'] = michal;
                        zuuluu = undefined;
                        michal = 'search';
                        entity = oscard.bind(zuuluu)(report, tangon, michal);
 193:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = golfie.bind(option)(tangon, oscard);
            var _closure2_slot2 = option;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            verify = option.length;
            tangon = new Array(3);
            tangon[0] = verify;
            verify = zuuluu.buttonsSpacing;
            tangon[1] = verify;
            zuuluu = zuuluu.buttonsTightSpacing;
            tangon[2] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot2;
                    zuuluu = entity.length;
                    entity = 2;
                    if(!(entity !== zuuluu)) { _fun00010_ip = 31; continue _fun00009 }
 19:
                    entity = _closure2_slot1;
                    entity = entity.buttonsSpacing;
                    _fun00010_ip = 41; continue _fun00009;
 31:
                    michal = _closure2_slot1;
                    entity = michal.buttonsTightSpacing;
 41:
                    return entity;
                }
            };
            verify = oscard.bind(golfie)(zuuluu, tangon);
            offset = _closure1_slot3;
            golfie = offset.useContext;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 24;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.SwipeForMemberListContext;
            offset = golfie.bind(offset)(zuuluu);
            var _closure2_slot3 = offset;
            zuuluu = 10;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useAnimatedScrollHandler;
            zuuluu = {};
            golfie = function(argFoo) { // Original name: o
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 53; continue _fun00011 }
 13:
                    entity = _closure2_slot3;
                    zuuluu = entity.disallowGesture;
                    michal = zuuluu.set;
                    entity = argFoo;
                    entity = entity.contentOffset;
                    tangon = entity.x;
                    entity = 0;
                    entity = entity !== tangon;
                    entity = michal.bind(zuuluu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            yankee['swipeForMemberListContext'] = offset;
            golfie['__closure'] = yankee;
            yankee = 3002962882428.0;
            golfie['__workletHash'] = yankee;
            yankee = _closure1_slot20;
            golfie['__initData'] = yankee;
            zuuluu['onScroll'] = golfie;
            golfie = function() { // Original name: s
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 35; continue _fun00013 }
 13:
                    entity = _closure2_slot3;
                    zuuluu = entity.disallowGesture;
                    michal = zuuluu.set;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 35:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            yankee['swipeForMemberListContext'] = offset;
            golfie['__closure'] = yankee;
            yankee = 3514082722415.0;
            golfie['__workletHash'] = yankee;
            yankee = _closure1_slot21;
            golfie['__initData'] = yankee;
            zuuluu['onEndDrag'] = golfie;
            yankee = tangon.bind(oscard)(zuuluu);
            oscard = _closure1_slot3;
            tangon = oscard.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = offset;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    if(zuuluu) { _fun00016_ip = 78; continue _fun00015 }
 16:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 25;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    tangon = zuuluu.Gesture;
                    zuuluu = tangon.Native;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = tangon.simultaneousWithExternalGesture;
                    michal = _closure2_slot3;
                    michal = michal.gesture;
                    entity = zuuluu.bind(tangon)(michal);
 78:
                    return entity;
                }
            };
            golfie = tangon.bind(oscard)(entity, zuuluu);
            oscard = _closure1_slot17;
            tangon = _closure1_slot18;
            entity = {'horizontal': true, 'alwaysBounceHorizontal': false};
            zuuluu = null;
            romeon = zuuluu != offset;
            offset = undefined;
            if(!romeon) { _fun00006_ip = 372; continue _fun00005 }
 369:
            offset = yankee;
 372:
            entity['onScroll'] = offset;
            entity['contentContainerStyle'] = verify;
            entity['children'] = option;
            oscard = oscard.bind(report)(tangon, entity);
            entity = oscard;
            if(!(zuuluu != golfie)) { _fun00006_ip = 446; continue _fun00005 }
 399:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 25;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.GestureDetector;
            michal = {};
            michal['gesture'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 446:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: TransitionGroupItem
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            oscard = entity.width;
            var _closure2_slot0 = oscard;
            romeon = entity.transitionState;
            var _closure2_slot1 = romeon;
            backup = entity.cleanUp;
            var _closure2_slot2 = backup;
            output = entity.animated;
            var _closure2_slot3 = output;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            option = 10;
            golfie = entity[option];
            verify = offset.bind(tangon)(golfie);
            golfie = verify.useSharedValue;
            sizing = 26;
            entity = entity[sizing];
            entity = offset.bind(tangon)(entity);
            entity = entity.TransitionStates;
            offset = entity.MOUNTED;
            entity = 0;
            if(!(romeon === offset)) { _fun00018_ip = 116; continue _fun00017 }
 113:
            entity = 1;
 116:
            foxtra = golfie.bind(verify)(entity);
            _closure2_slot4 = foxtra;
            kiloes = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = entity[option];
            offset = kiloes.bind(tangon)(golfie);
            verify = offset.useAnimatedStyle;
            golfie = function() { // Original name: c
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = {};
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    report = 27;
                    michal = michal[report];
                    verify = undefined;
                    kiloes = tangon.bind(verify)(michal);
                    backup = kiloes.withSpring;
                    oscard = _closure2_slot4;
                    tangon = oscard.get;
                    foxtra = tangon.bind(oscard)();
                    romeon = _closure1_slot15;
                    tangon = _closure2_slot3;
                    golfie = 'animate-never';
                    yankee = golfie;
                    if(!tangon) { _fun00020_ip = 74; continue _fun00019 }
 68:
                    yankee = 'respect-motion-settings';
 74:
                    oscard = function(argFoo) { // Original name: t
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun00022_ip = 54; continue _fun00021 }
 6:
                            zuuluu = _closure2_slot1;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            michal = 26;
                            tangon = tangon[michal];
                            michal = undefined;
                            michal = report.bind(michal)(tangon);
                            michal = michal.TransitionStates;
                            michal = michal.YEETED;
                            entity = zuuluu === michal;
 54:
                            if(!entity) { _fun00022_ip = 103; continue _fun00021 }
 57:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 10;
                            entity = michal[entity];
                            michal = undefined;
                            tangon = zuuluu.bind(michal)(entity);
                            zuuluu = tangon.runOnJS;
                            entity = _closure2_slot2;
                            entity = zuuluu.bind(tangon)(entity);
                            entity = entity.bind(michal)();
 103:
                            entity = undefined;
                            return entity;
                        }
                    };
                    sizing = {};
                    tangon = _closure2_slot1;
                    sizing['transitionState'] = tangon;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 26;
                    tangon = offset[tangon];
                    tangon = option.bind(verify)(tangon);
                    tangon = tangon.TransitionStates;
                    sizing['TransitionStates'] = tangon;
                    tangon = 10;
                    output = offset[tangon];
                    output = option.bind(verify)(output);
                    output = output.runOnJS;
                    sizing['runOnJS'] = output;
                    output = _closure2_slot2;
                    sizing['cleanUp'] = output;
                    oscard['__closure'] = sizing;
                    sizing = 9346021878481.0;
                    oscard['__workletHash'] = sizing;
                    sizing = _closure1_slot23;
                    oscard['__initData'] = sizing;
                    ctrled = kiloes;
                    source = foxtra;
                    update = romeon;
                    echoed = yankee;
                    result = oscard;
                    oscard = ctrled[backup](source, update, echoed, result, output);
                    entity['opacity'] = oscard;
                    report = offset[report];
                    oscard = option.bind(verify)(report);
                    report = oscard.withSpring;
                    tangon = offset[tangon];
                    yankee = option.bind(verify)(tangon);
                    offset = yankee.interpolate;
                    option = _closure2_slot4;
                    tangon = option.get;
                    verify = tangon.bind(option)();
                    tangon = _closure2_slot0;
                    option = [0];
                    option[1] = tangon;
                    tangon = [0, 1];
                    tangon = offset.bind(yankee)(verify, tangon, option);
                    zuuluu = _closure1_slot15;
                    option = _closure2_slot3;
                    if(!option) { _fun00020_ip = 304; continue _fun00019 }
 298:
                    golfie = 'respect-motion-settings';
 304:
                    zuuluu = report.bind(oscard)(tangon, zuuluu, golfie);
                    entity['width'] = zuuluu;
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.get;
                    tangon = michal.bind(zuuluu)();
                    michal = 'absolute';
                    zuuluu = 1;
                    if(!(zuuluu === tangon)) { _fun00020_ip = 343; continue _fun00019 }
 339:
                    michal = 'relative';
 343:
                    entity['position'] = michal;
                    return entity;
                }
            };
            yankee = {};
            result = 27;
            result = entity[result];
            result = kiloes.bind(tangon)(result);
            result = result.withSpring;
            yankee['withSpring'] = result;
            yankee['opacity'] = foxtra;
            result = _closure1_slot15;
            yankee['SPRING_CHANNEL_DETAILS'] = result;
            yankee['animated'] = output;
            yankee['transitionState'] = romeon;
            sizing = entity[sizing];
            sizing = kiloes.bind(tangon)(sizing);
            sizing = sizing.TransitionStates;
            yankee['TransitionStates'] = sizing;
            sizing = entity[option];
            sizing = kiloes.bind(tangon)(sizing);
            sizing = sizing.runOnJS;
            yankee['runOnJS'] = sizing;
            yankee['cleanUp'] = backup;
            backup = entity[option];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.interpolate;
            yankee['interpolate'] = backup;
            yankee['width'] = oscard;
            golfie['__closure'] = yankee;
            yankee = 6692494091051.0;
            golfie['__workletHash'] = yankee;
            yankee = _closure1_slot22;
            golfie['__initData'] = yankee;
            golfie = verify.bind(offset)(golfie);
            yankee = _closure1_slot3;
            offset = yankee.useEffect;
            verify = new Array(2);
            verify[0] = foxtra;
            verify[1] = romeon;
            zuuluu = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = _closure2_slot4;
                    zuuluu = tangon.set;
                    oscard = _closure2_slot1;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 26;
                    michal = michal[entity];
                    entity = undefined;
                    michal = report.bind(entity)(michal);
                    michal = michal.TransitionStates;
                    report = michal.YEETED;
                    michal = 1;
                    if(!(oscard === report)) { _fun00024_ip = 62; continue _fun00023 }
 60:
                    michal = 0;
 62:
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            zuuluu = offset.bind(yankee)(zuuluu, verify);
            zuuluu = _closure1_slot17;
            michal = _closure1_slot1;
            entity = entity[option];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            option = {};
            option['width'] = oscard;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.View;
    var _closure1_slot4 = verify;
    verify = tangon.ScrollView;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    offset = tangon.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = offset;
    offset = tangon.useChannelDetailsSearchActiveSource;
    var _closure1_slot9 = offset;
    tangon = tangon.useIsChannelDetailsSearchActive;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    offset = tangon.BUTTON_DEFAULT_HEIGHT;
    var _closure1_slot11 = offset;
    offset = tangon.CHANNEL_DETAILS_SEARCH_HEIGHT;
    var _closure1_slot12 = offset;
    foxtra = tangon.CHANNEL_DETAILS_TOP_MARGIN;
    offset = tangon.ChannelDetailsButtonTypes;
    var _closure1_slot13 = offset;
    offset = tangon.ChannelDetailsNavigatorScreens;
    var _closure1_slot14 = offset;
    tangon = tangon.SPRING_CHANNEL_DETAILS;
    var _closure1_slot15 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelSettingsSections;
    var _closure1_slot16 = tangon;
    kiloes = 8;
    tangon = oscard[kiloes];
    tangon = report.bind(entity)(tangon);
    romeon = tangon.SEARCH_BAR_HEIGHT;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot17 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    option = option.bind(entity)(tangon);
    tangon = option.createAnimatedComponent;
    tangon = tangon.bind(option)(verify);
    var _closure1_slot18 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    yankee = 'center';
    offset = {'flexGrow': 1, 'flexDirection': 'row', 'justifyContent': 'center', 'gap': 48};
    tangon['buttonsTightSpacing'] = offset;
    backup = 24;
    offset = {'flexGrow': 1, 'flexDirection': 'row', 'justifyContent': 'space-evenly', 'paddingHorizontal': 24, 'gap': 24};
    tangon['buttonsSpacing'] = offset;
    offset = {'flexGrow': 0, 'flexShrink': 1, 'alignItems': 'center'};
    tangon['button'] = offset;
    offset = {};
    offset['marginTop'] = kiloes;
    tangon['buttonText'] = offset;
    offset = {};
    offset['marginHorizontal'] = backup;
    tangon['buttons'] = offset;
    offset = {};
    offset['marginTop'] = foxtra;
    foxtra = 16;
    offset['marginBottom'] = foxtra;
    offset['height'] = romeon;
    tangon['search'] = offset;
    offset = {};
    offset['justifyContent'] = yankee;
    tangon['container'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot19 = tangon;
    tangon = {};
    option = 'function ChannelDetailsButtonsTsx1(event){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(event.contentOffset.x!==0);}';
    tangon['code'] = option;
    var _closure1_slot20 = tangon;
    tangon = {};
    option = 'function ChannelDetailsButtonsTsx2(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}';
    tangon['code'] = option;
    var _closure1_slot21 = tangon;
    tangon = {};
    option = "function ChannelDetailsButtonsTsx3(){const{withSpring,opacity,SPRING_CHANNEL_DETAILS,animated,transitionState,TransitionStates,runOnJS,cleanUp,interpolate,width}=this.__closure;return{opacity:withSpring(opacity.get(),SPRING_CHANNEL_DETAILS,animated?'respect-motion-settings':'animate-never',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:withSpring(interpolate(opacity.get(),[0,1],[0,width]),SPRING_CHANNEL_DETAILS,animated?'respect-motion-settings':'animate-never'),position:opacity.get()===1?'relative':'absolute'};}";
    tangon['code'] = option;
    var _closure1_slot22 = tangon;
    tangon = {};
    option = 'function ChannelDetailsButtonsTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    tangon['code'] = option;
    var _closure1_slot23 = tangon;
    tangon = {};
    option = 'buttons';
    tangon['BUTTONS'] = option;
    option = 'search';
    tangon['SEARCH'] = option;
    var _closure1_slot24 = tangon;
    tangon = {};
    option = "function ChannelDetailsButtonsTsx5(){const{withSpring,activeState,CHANNEL_DETAILS_SEARCH_HEIGHT,BUTTON_DEFAULT_HEIGHT,SPRING_CHANNEL_DETAILS,animated}=this.__closure;return{minHeight:withSpring(activeState?CHANNEL_DETAILS_SEARCH_HEIGHT:BUTTON_DEFAULT_HEIGHT,SPRING_CHANNEL_DETAILS,animated?'respect-motion-settings':'animate-never')};}";
    tangon['code'] = option;
    var _closure1_slot25 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        zuuluu = argFoo;
        sizing = argBar;
        echoed = zuuluu.channel;
        var _closure2_slot0 = echoed;
        output = zuuluu.onSuggestionsLayoutMesure;
        var _closure2_slot1 = output;
        entity = zuuluu.suggestionsDismissed;
        var _closure2_slot2 = entity;
        foxtra = zuuluu.setSuggestionsDismissed;
        var _closure2_slot3 = foxtra;
        verify = zuuluu.componentWidth;
        var _closure2_slot4 = sizing;
        zuuluu = _closure1_slot19;
        tangon = undefined;
        golfie = zuuluu.bind(tangon)();
        var _closure2_slot5 = golfie;
        oscard = _closure1_slot0;
        yankee = _closure1_slot2;
        zuuluu = 28;
        zuuluu = yankee[zuuluu];
        option = oscard.bind(tangon)(zuuluu);
        zuuluu = option.useChannelDetailWidth;
        result = zuuluu.bind(option)(verify);
        var _closure2_slot6 = result;
        option = _closure1_slot10;
        zuuluu = echoed.id;
        kiloes = option.bind(tangon)(zuuluu);
        var _closure2_slot7 = kiloes;
        option = _closure1_slot9;
        zuuluu = echoed.id;
        option = option.bind(tangon)(zuuluu);
        romeon = _closure1_slot3;
        offset = romeon.useMemo;
        verify = new Array(1);
        verify[0] = kiloes;
        zuuluu = function() {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = _closure2_slot7;
                michal = _closure1_slot24;
                if(entity) { _fun00026_ip = 33; continue _fun00025 }
 17:
                zuuluu = michal.BUTTONS;
                entity = new Array(1);
                entity[0] = zuuluu;
                _fun00026_ip = 50; continue _fun00025;
 33:
                zuuluu = michal.SEARCH;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 50:
                return entity;
            }
        };
        offset = offset.bind(romeon)(zuuluu, verify);
        backup = _closure1_slot3;
        romeon = backup.useCallback;
        verify = function(argFoo) {
            entity = argFoo;
            return entity;
        };
        zuuluu = new Array(0);
        verify = romeon.bind(backup)(verify, zuuluu);
        zuuluu = 'initial';
        backup = zuuluu !== option;
        var _closure2_slot8 = backup;
        romeon = _closure1_slot3;
        option = romeon.useCallback;
        zuuluu = new Array(9);
        zuuluu[0] = backup;
        zuuluu[1] = echoed;
        zuuluu[2] = result;
        zuuluu[3] = output;
        zuuluu[4] = sizing;
        zuuluu[5] = foxtra;
        foxtra = golfie.buttons;
        zuuluu[6] = foxtra;
        foxtra = golfie.search;
        zuuluu[7] = foxtra;
        zuuluu[8] = entity;
        entity = function(argFoo, argBar, argBaz, argCor) {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = argFoo;
                zuuluu = argBar;
                entity = argBaz;
                oscard = argCor;
                michal = _closure1_slot24;
                michal = michal.BUTTONS;
                if(!(michal !== zuuluu)) { _fun00028_ip = 235; continue _fun00027 }
 32:
                michal = _closure1_slot24;
                michal = michal.SEARCH;
                if(!(michal !== zuuluu)) { _fun00028_ip = 50; continue _fun00027 }
 46:
                michal = undefined;
                return michal;
 50:
                golfie = _closure1_slot17;
                tangon = _closure1_slot32;
                zuuluu = {};
                zuuluu['transitionState'] = entity;
                michal = _closure2_slot6;
                zuuluu['width'] = michal;
                zuuluu['cleanUp'] = oscard;
                michal = _closure2_slot8;
                zuuluu['animated'] = michal;
                yankee = _closure1_slot17;
                offset = _closure1_slot4;
                option = {};
                michal = _closure2_slot5;
                michal = michal.search;
                option['style'] = michal;
                backup = _closure1_slot17;
                foxtra = _closure1_slot1;
                romeon = _closure1_slot2;
                michal = 29;
                romeon = romeon[michal];
                michal = undefined;
                foxtra = foxtra.bind(michal)(romeon);
                romeon = {};
                sizing = _closure2_slot4;
                romeon['ref'] = sizing;
                sizing = _closure2_slot0;
                output = sizing.id;
                romeon['channelId'] = output;
                sizing = sizing.guild_id;
                romeon['guildId'] = sizing;
                sizing = _closure2_slot1;
                romeon['onSuggestionsLayoutMesure'] = sizing;
                sizing = _closure2_slot2;
                romeon['suggestionsDismissed'] = sizing;
                kiloes = _closure2_slot3;
                romeon['setSuggestionsDismissed'] = kiloes;
                kiloes = true;
                romeon['showBackButton'] = kiloes;
                romeon = backup.bind(michal)(foxtra, romeon);
                option['children'] = romeon;
                option = yankee.bind(michal)(offset, option);
                zuuluu['children'] = option;
                michal = golfie.bind(michal)(tangon, zuuluu, report);
                return michal;
 235:
                tangon = _closure1_slot17;
                zuuluu = _closure1_slot32;
                michal = {};
                michal['transitionState'] = entity;
                golfie = _closure2_slot6;
                michal['width'] = golfie;
                michal['cleanUp'] = oscard;
                oscard = _closure2_slot8;
                michal['animated'] = oscard;
                option = _closure1_slot17;
                golfie = _closure1_slot4;
                oscard = {};
                offset = _closure2_slot5;
                offset = offset.buttons;
                oscard['style'] = offset;
                yankee = _closure1_slot17;
                offset = _closure1_slot31;
                verify = {};
                entity = _closure2_slot0;
                verify['channel'] = entity;
                entity = undefined;
                verify = yankee.bind(entity)(offset, verify);
                oscard['children'] = verify;
                oscard = option.bind(entity)(golfie, oscard);
                michal['children'] = oscard;
                entity = tangon.bind(entity)(zuuluu, michal, report);
                return entity;
            }
        };
        option = option.bind(romeon)(entity, zuuluu);
        entity = 10;
        zuuluu = yankee[entity];
        romeon = oscard.bind(tangon)(zuuluu);
        zuuluu = romeon.useAnimatedStyle;
        michal = function() { // Original name: S
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = {};
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 27;
                tangon = tangon[michal];
                michal = undefined;
                oscard = report.bind(michal)(tangon);
                report = oscard.withSpring;
                tangon = _closure2_slot7;
                if(tangon) { _fun00030_ip = 48; continue _fun00029 }
 42:
                tangon = _closure1_slot11;
                _fun00030_ip = 52; continue _fun00029;
 48:
                tangon = _closure1_slot12;
 52:
                zuuluu = _closure1_slot15;
                golfie = _closure2_slot8;
                michal = 'animate-never';
                if(!golfie) { _fun00030_ip = 75; continue _fun00029 }
 69:
                michal = 'respect-motion-settings';
 75:
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                entity['minHeight'] = michal;
                return entity;
            }
        };
        foxtra = {};
        sizing = 27;
        sizing = yankee[sizing];
        sizing = oscard.bind(tangon)(sizing);
        sizing = sizing.withSpring;
        foxtra['withSpring'] = sizing;
        foxtra['activeState'] = kiloes;
        kiloes = _closure1_slot12;
        foxtra['CHANNEL_DETAILS_SEARCH_HEIGHT'] = kiloes;
        kiloes = _closure1_slot11;
        foxtra['BUTTON_DEFAULT_HEIGHT'] = kiloes;
        kiloes = _closure1_slot15;
        foxtra['SPRING_CHANNEL_DETAILS'] = kiloes;
        foxtra['animated'] = backup;
        michal['__closure'] = foxtra;
        foxtra = 17218558972164.0;
        michal['__workletHash'] = foxtra;
        foxtra = _closure1_slot25;
        michal['__initData'] = foxtra;
        romeon = zuuluu.bind(romeon)(michal);
        zuuluu = _closure1_slot17;
        michal = _closure1_slot1;
        entity = yankee[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.View;
        entity = {};
        foxtra = golfie.container;
        golfie = new Array(2);
        golfie[0] = foxtra;
        golfie[1] = romeon;
        entity['style'] = golfie;
        golfie = _closure1_slot17;
        report = 26;
        report = yankee[report];
        report = oscard.bind(tangon)(report);
        oscard = report.TransitionGroup;
        report = {};
        report['items'] = offset;
        report['getItemKey'] = verify;
        report['renderItem'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = tangon.bind(golfie)(michal);
    michal = golfie.memo;
    michal = michal.bind(golfie)(tangon);
    tangon = 30;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsButtons.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();