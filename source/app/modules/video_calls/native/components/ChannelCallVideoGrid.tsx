// app/modules/video_calls/native/components/ChannelCallVideoGrid.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ChannelCallVideoGridList
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.channel;
            var _closure2_slot0 = entity;
            verify = zuuluu.filteredParticipants;
            report = undefined;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 22;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)();
            offset = zuuluu.height;
            zuuluu = zuuluu.width;
            tangon = zuuluu > offset;
            var _closure2_slot1 = tangon;
            golfie = 2;
            if(!tangon) { _fun00002_ip = 92; continue _fun00001 }
 89:
            golfie = 4;
 92:
            oscard = function(argFoo, argBar) { // Original name: getGridData
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    oscard = argBar;
                    zuuluu = oscard.some;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        entity = _closure1_slot12;
                        entity = entity.ACTIVITY;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = zuuluu.bind(oscard)(entity);
                    zuuluu = !entity;
                    if(!zuuluu) { _fun00004_ip = 48; continue _fun00003 }
 32:
                    golfie = oscard.length;
                    report = 2;
                    report = report * tangon;
                    zuuluu = golfie <= report;
 48:
                    if(!entity) { _fun00004_ip = 60; continue _fun00003 }
 51:
                    report = oscard.length;
                    entity = report <= tangon;
 60:
                    golfie = oscard.length;
                    report = 1;
                    if(!(golfie > report)) { _fun00004_ip = 78; continue _fun00003 }
 72:
                    if(zuuluu) { _fun00004_ip = 117; continue _fun00003 }
 75:
                    if(entity) { _fun00004_ip = 117; continue _fun00003 }
 78:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 18;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = report.bind(entity)(zuuluu);
                    entity = zuuluu.chunk;
                    entity = entity.bind(zuuluu)(oscard, tangon);
                    _fun00004_ip = 165; continue _fun00003;
 117:
                    tangon = new Array(0);
                    var _closure3_slot0 = tangon;
                    zuuluu = new Array(0);
                    var _closure3_slot1 = zuuluu;
                    report = oscard.forEach;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = argFoo;
                            michal = _closure3_slot0;
                            tangon = michal.length;
                            michal = _closure3_slot1;
                            michal = michal.length;
                            if(!(tangon !== michal)) { _fun00006_ip = 44; continue _fun00005 }
 28:
                            tangon = _closure3_slot1;
                            michal = tangon.push;
                            michal = michal.bind(tangon)(zuuluu);
                            _fun00006_ip = 58; continue _fun00005;
 44:
                            michal = _closure3_slot0;
                            entity = michal.push;
                            entity = entity.bind(michal)(zuuluu);
 58:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = report.bind(oscard)(michal);
                    michal = new Array(2);
                    michal[0] = tangon;
                    michal[1] = zuuluu;
                    entity = michal;
 165:
                    return entity;
                }
            };
            verify = oscard.bind(report)(golfie, verify);
            _closure2_slot2 = verify;
            golfie = verify.length;
            oscard = function(argFoo, argBar, argBaz) { // Original name: useCellSize
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    option = argBar;
                    golfie = argBaz;
                    var _closure3_slot0 = option;
                    var _closure3_slot1 = golfie;
                    michal = argFoo;
                    oscard = michal > option;
                    var _closure3_slot2 = oscard;
                    report = 4;
                    if(!oscard) { _fun00008_ip = 36; continue _fun00007 }
 33:
                    report = 2;
 36:
                    var _closure3_slot3 = report;
                    tangon = _closure1_slot4;
                    zuuluu = tangon.useMemo;
                    michal = new Array(4);
                    michal[0] = option;
                    michal[1] = golfie;
                    michal[2] = oscard;
                    michal[3] = report;
                    entity = function() {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            michal = _closure3_slot0;
                            entity = _closure3_slot1;
                            zuuluu = michal / entity;
                            entity = _closure3_slot3;
                            michal = michal / entity;
                            entity = global;
                            tangon = entity.Math;
                            entity = tangon.max;
                            tangon = entity.bind(tangon)(zuuluu, michal);
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            offset = 21;
                            oscard = oscard[offset];
                            verify = undefined;
                            oscard = golfie.bind(verify)(oscard);
                            oscard = oscard.AvatarSizes;
                            oscard = oscard.PROFILE;
                            oscard = 420;
                            if(!(!(tangon > oscard))) { _fun00010_ip = 202; continue _fun00009 }
 89:
                            oscard = 240;
                            if(!(!(tangon > oscard))) { _fun00010_ip = 169; continue _fun00009 }
 96:
                            oscard = 160;
                            if(!(!(tangon > oscard))) { _fun00010_ip = 136; continue _fun00009 }
 103:
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            oscard = oscard[offset];
                            oscard = golfie.bind(verify)(oscard);
                            oscard = oscard.AvatarSizes;
                            golfie = oscard.LARGE;
                            oscard = true;
                            _fun00010_ip = 233; continue _fun00009;
 136:
                            yankee = _closure1_slot0;
                            option = _closure1_slot2;
                            option = option[offset];
                            option = yankee.bind(verify)(option);
                            option = option.AvatarSizes;
                            golfie = option.XLARGE;
                            oscard = true;
                            _fun00010_ip = 233; continue _fun00009;
 169:
                            yankee = _closure1_slot0;
                            option = _closure1_slot2;
                            option = option[offset];
                            option = yankee.bind(verify)(option);
                            option = option.AvatarSizes;
                            golfie = option.XXLARGE;
                            oscard = true;
                            _fun00010_ip = 233; continue _fun00009;
 202:
                            option = _closure1_slot0;
                            entity = _closure1_slot2;
                            entity = entity[offset];
                            entity = option.bind(verify)(entity);
                            entity = entity.AvatarSizes;
                            golfie = entity.PROFILE;
                            oscard = false;
 233:
                            entity = {};
                            entity['avatarSize'] = golfie;
                            entity['shrinkStreamEmptyState'] = oscard;
                            report = _closure3_slot2;
                            entity['isLandscape'] = report;
                            entity['size'] = tangon;
                            entity['fitSize'] = zuuluu;
                            entity['minSize'] = michal;
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                }
            };
            oscard = oscard.bind(report)(zuuluu, offset, golfie);
            foxtra = oscard.avatarSize;
            _closure2_slot3 = foxtra;
            sizing = oscard.shrinkStreamEmptyState;
            _closure2_slot4 = sizing;
            kiloes = oscard.size;
            _closure2_slot5 = kiloes;
            backup = oscard.fitSize;
            golfie = oscard.minSize;
            romeon = _closure1_slot4;
            yankee = romeon.useCallback;
            output = verify.length;
            oscard = new Array(6);
            oscard[0] = output;
            oscard[1] = entity;
            oscard[2] = kiloes;
            oscard[3] = sizing;
            oscard[4] = foxtra;
            oscard[5] = tangon;
            tangon = function(argFoo) {
                entity = argFoo;
                yankee = entity.item;
                oscard = entity.index;
                entity = _closure2_slot2;
                michal = entity.length;
                entity = 1;
                report = michal - entity;
                zuuluu = _closure1_slot17;
                michal = new Array(0);
                golfie = 0;
                romeon = michal;
                offset = 0;
                tangon = arraySpread(romeon, yankee, offset);
                tangon = undefined;
                romeon = zuuluu;
                yankee = michal;
                offset = undefined;
                verify = apply(romeon, yankee, offset);
                zuuluu = _closure1_slot13;
                michal = _closure1_slot15;
                entity = {};
                entity['participants'] = verify;
                verify = _closure2_slot0;
                entity['channel'] = verify;
                verify = _closure2_slot5;
                entity['size'] = verify;
                verify = _closure2_slot4;
                entity['shrinkStreamEmptyState'] = verify;
                verify = _closure2_slot3;
                entity['avatarSize'] = verify;
                option = _closure2_slot1;
                entity['isLandscape'] = option;
                golfie = golfie === oscard;
                entity['isFirstRow'] = golfie;
                report = oscard === report;
                entity['isLastRow'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            oscard = yankee.bind(romeon)(tangon, oscard);
            foxtra = _closure1_slot4;
            romeon = foxtra.useCallback;
            yankee = new Array(1);
            yankee[0] = kiloes;
            tangon = function(argFoo, argBar) {
                michal = argBar;
                entity = {};
                tangon = _closure2_slot5;
                entity['length'] = tangon;
                zuuluu = _closure2_slot5;
                zuuluu = zuuluu * michal;
                entity['offset'] = zuuluu;
                entity['index'] = michal;
                return entity;
            };
            yankee = romeon.bind(foxtra)(tangon, yankee);
            michal = function(argFoo, argBar) { // Original name: useScrollProps
                offset = argBar;
                entity = argFoo;
                verify = entity > offset;
                var _closure3_slot0 = verify;
                oscard = _closure1_slot4;
                zuuluu = oscard.useRef;
                michal = _closure1_slot6;
                michal = michal.Value;
                report = michal.prototype;
                golfie = Object.create(report, {constructor: {value: michal}});
                report = 0;
                foxtra = golfie;
                romeon = 0;
                michal = new foxtra[michal](romeon, yankee);
                michal = michal instanceof Object ? michal : golfie;
                oscard = zuuluu.bind(oscard)(michal);
                var _closure3_slot1 = oscard;
                zuuluu = _closure1_slot4;
                michal = zuuluu.useRef;
                michal = michal.bind(zuuluu)(report);
                var _closure3_slot2 = michal;
                golfie = _closure1_slot4;
                report = golfie.useCallback;
                zuuluu = function() {
                    michal = _closure3_slot2;
                    entity = global;
                    zuuluu = entity.performance;
                    entity = zuuluu.now;
                    entity = entity.bind(zuuluu)();
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                michal = new Array(0);
                michal = report.bind(golfie)(zuuluu, michal);
                option = _closure1_slot4;
                golfie = option.useCallback;
                report = new Array(1);
                report[0] = verify;
                zuuluu = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        michal = _closure3_slot0;
                        if(michal) { _fun00012_ip = 131; continue _fun00011 }
 10:
                        michal = global;
                        zuuluu = michal.performance;
                        michal = zuuluu.now;
                        michal = michal.bind(zuuluu)();
                        entity = _closure3_slot2;
                        entity = entity.current;
                        report = michal - entity;
                        entity = argFoo;
                        entity = entity.nativeEvent;
                        entity = entity.contentOffset;
                        tangon = entity.y;
                        michal = _closure1_slot18;
                        michal = tangon <= michal;
                        if(michal) { _fun00012_ip = 96; continue _fun00011 }
 73:
                        zuuluu = -5;
                        zuuluu = tangon < zuuluu;
                        if(!zuuluu) { _fun00012_ip = 93; continue _fun00011 }
 86:
                        tangon = 150;
                        zuuluu = report < tangon;
 93:
                        michal = zuuluu;
 96:
                        if(!michal) { _fun00012_ip = 131; continue _fun00011 }
 99:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 19;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.pop;
                        entity = entity.bind(michal)();
 131:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = golfie.bind(option)(zuuluu, report);
                option = _closure1_slot4;
                golfie = option.useCallback;
                report = new Array(1);
                report[0] = verify;
                tangon = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        michal = _closure3_slot0;
                        if(michal) { _fun00014_ip = 102; continue _fun00013 }
 10:
                        entity = _closure3_slot1;
                        zuuluu = entity.current;
                        michal = zuuluu.setValue;
                        entity = global;
                        golfie = entity.Math;
                        oscard = golfie.min;
                        verify = entity.Math;
                        option = verify.max;
                        entity = argFoo;
                        entity = entity.nativeEvent;
                        entity = entity.contentOffset;
                        report = entity.y;
                        tangon = _closure1_slot18;
                        report = option.bind(verify)(report, tangon);
                        tangon = 0;
                        tangon = oscard.bind(golfie)(report, tangon);
                        entity = _closure1_slot18;
                        entity = tangon / entity;
                        entity = michal.bind(zuuluu)(entity);
 102:
                        entity = undefined;
                        return entity;
                    }
                };
                tangon = golfie.bind(option)(tangon, report);
                golfie = _closure1_slot1;
                report = _closure1_slot2;
                entity = 20;
                entity = report[entity];
                report = undefined;
                entity = golfie.bind(report)(entity);
                verify = entity.bind(report)(oscard);
                entity = {};
                oscard = {};
                golfie = verify.interpolate;
                report = {};
                option = [0, 1];
                report['inputRange'] = option;
                option = 0.05;
                offset = option * offset;
                option = [0];
                option[1] = offset;
                report['outputRange'] = option;
                report = golfie.bind(verify)(report);
                oscard['translateY'] = report;
                report = new Array(2);
                report[0] = oscard;
                oscard = {};
                option = verify.interpolate;
                golfie = {};
                offset = [0, 1];
                golfie['inputRange'] = offset;
                offset = [1, 0.9];
                golfie['outputRange'] = offset;
                golfie = option.bind(verify)(golfie);
                oscard['scale'] = golfie;
                report[1] = oscard;
                entity['transform'] = report;
                entity['onScroll'] = tangon;
                entity['onScrollEndDrag'] = zuuluu;
                entity['onScrollStartDrag'] = michal;
                return entity;
            };
            michal = michal.bind(report)(zuuluu, offset);
            romeon = michal.onScrollEndDrag;
            foxtra = michal.onScroll;
            tangon = michal.onScrollStartDrag;
            output = michal.transform;
            michal = entity.type;
            zuuluu = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 23;
            entity = sizing[entity];
            entity = zuuluu.bind(report)(entity);
            entity = entity.ChannelTypes;
            entity = entity.GUILD_VOICE;
            if(!(michal !== entity)) { _fun00002_ip = 504; continue _fun00001 }
 334:
            zuuluu = _closure1_slot13;
            entity = _closure1_slot6;
            michal = entity.FlatList;
            entity = {};
            sizing = {};
            sizing['transform'] = output;
            entity['style'] = sizing;
            backup = kiloes !== backup;
            entity['bounces'] = backup;
            entity['onScroll'] = foxtra;
            entity['onScrollEndDrag'] = romeon;
            entity['onScrollBeginDrag'] = tangon;
            tangon = false;
            entity['showsVerticalScrollIndicator'] = tangon;
            entity['showsHorizontalScrollIndicator'] = tangon;
            entity['getItemLayout'] = yankee;
            entity['data'] = verify;
            tangon = _closure1_slot16;
            entity['keyExtractor'] = tangon;
            entity['renderItem'] = oscard;
            tangon = 16;
            entity['scrollEventThrottle'] = tangon;
            romeon = global;
            kiloes = romeon.Math;
            backup = kiloes.ceil;
            foxtra = offset / golfie;
            foxtra = backup.bind(kiloes)(foxtra);
            entity['maxToRenderPerBatch'] = foxtra;
            backup = romeon.Math;
            foxtra = backup.ceil;
            romeon = offset / golfie;
            romeon = foxtra.bind(backup)(romeon);
            entity['initialNumToRender'] = romeon;
            entity['windowSize'] = tangon;
            tangon = true;
            entity['removeClippedSubviews'] = tangon;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00002_ip = 638; continue _fun00001;
 504:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 24;
            michal = romeon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {'showsVerticalScrollIndicator': false, 'showsHorizontalScrollIndicator': false};
            michal['getItemLayout'] = yankee;
            michal['data'] = verify;
            option = _closure1_slot16;
            michal['keyExtractor'] = option;
            michal['renderItem'] = oscard;
            oscard = 16;
            michal['scrollEventThrottle'] = oscard;
            option = global;
            romeon = option.Math;
            yankee = romeon.ceil;
            verify = offset / golfie;
            verify = yankee.bind(romeon)(verify);
            michal['maxToRenderPerBatch'] = verify;
            verify = option.Math;
            option = verify.ceil;
            golfie = offset / golfie;
            golfie = option.bind(verify)(golfie);
            michal['initialNumToRender'] = golfie;
            michal['windowSize'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 638:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.View;
    var _closure1_slot5 = verify;
    tangon = tangon.Animated;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.isStreamParticipant;
    var _closure1_slot10 = option;
    option = tangon.isActivityParticipant;
    var _closure1_slot11 = option;
    tangon = tangon.ParticipantTypes;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 'row';
    offset['flexDirection'] = yankee;
    tangon['row'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot14 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) {
        entity = argFoo;
        golfie = entity.participants;
        var _closure2_slot0 = golfie;
        michal = entity.channel;
        var _closure2_slot1 = michal;
        michal = entity.isLandscape;
        var _closure2_slot2 = michal;
        zuuluu = entity.size;
        michal = entity.avatarSize;
        var _closure2_slot3 = michal;
        michal = entity.isLastRow;
        var _closure2_slot4 = michal;
        michal = entity.isFirstRow;
        var _closure2_slot5 = michal;
        entity = entity.shrinkStreamEmptyState;
        var _closure2_slot6 = entity;
        michal = _closure1_slot14;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        michal = {};
        option = 1;
        michal['flex'] = option;
        michal['height'] = zuuluu;
        var _closure2_slot7 = michal;
        zuuluu = _closure1_slot13;
        michal = _closure1_slot5;
        entity = {};
        oscard = oscard.row;
        entity['style'] = oscard;
        oscard = golfie.map;
        report = function(argFoo, argBar) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                foxtra = argBar;
                offset = _closure2_slot2;
                if(!offset) { _fun00016_ip = 36; continue _fun00015 }
 16:
                michal = _closure2_slot0;
                zuuluu = michal.length;
                michal = 1;
                michal = zuuluu - michal;
                offset = foxtra === michal;
 36:
                report = _closure1_slot13;
                tangon = _closure1_slot5;
                zuuluu = {};
                michal = _closure2_slot7;
                zuuluu['style'] = michal;
                verify = _closure1_slot13;
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                michal = 9;
                golfie = golfie[michal];
                michal = undefined;
                option = option.bind(michal)(golfie);
                golfie = {};
                yankee = _closure2_slot6;
                golfie['shrinkStreamEmptyState'] = yankee;
                yankee = _closure2_slot3;
                golfie['avatarSize'] = yankee;
                golfie['participant'] = oscard;
                yankee = _closure2_slot5;
                if(!yankee) { _fun00016_ip = 121; continue _fun00015 }
 115:
                backup = 0;
                yankee = backup === foxtra;
 121:
                if(!yankee) { _fun00016_ip = 140; continue _fun00015 }
 124:
                backup = _closure2_slot0;
                kiloes = backup.length;
                backup = 1;
                yankee = kiloes > backup;
 140:
                if(!yankee) { _fun00016_ip = 173; continue _fun00015 }
 143:
                backup = _closure1_slot0;
                kiloes = _closure1_slot2;
                romeon = 10;
                romeon = kiloes[romeon];
                backup = backup.bind(michal)(romeon);
                romeon = backup.isIOS;
                yankee = romeon.bind(backup)();
 173:
                golfie['hasNotch'] = yankee;
                yankee = _closure2_slot1;
                golfie['channel'] = yankee;
                yankee = _closure2_slot5;
                golfie['hasTopSafeArea'] = yankee;
                yankee = _closure2_slot2;
                if(!yankee) { _fun00016_ip = 208; continue _fun00015 }
 202:
                romeon = 0;
                yankee = romeon === foxtra;
 208:
                golfie['hasLeftSafeArea'] = yankee;
                golfie['hasRightSafeArea'] = offset;
                offset = _closure2_slot4;
                golfie['hasBottomSafeArea'] = offset;
                golfie = verify.bind(michal)(option, golfie);
                zuuluu['children'] = golfie;
                verify = oscard.id;
                option = _closure2_slot2;
                entity = global;
                entity = entity.HermesInternal;
                golfie = entity.concat;
                oscard = '';
                entity = '+';
                entity = golfie.bind(oscard)(verify, entity, option);
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            }
        };
        report = oscard.bind(golfie)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot15 = tangon;
    tangon = function(argFoo) { // Original name: keyExtractor
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            entity = 0;
            zuuluu = report[entity];
            tangon = null;
            oscard = tangon == zuuluu;
            entity = undefined;
            if(oscard) { _fun00018_ip = 25; continue _fun00017 }
 20:
            entity = zuuluu.id;
 25:
            zuuluu = 1;
            zuuluu = report[zuuluu];
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00018_ip = 46; continue _fun00017 }
 41:
            michal = zuuluu.id;
 46:
            entity = entity + michal;
            return entity;
        }
    };
    var _closure1_slot16 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.cachedFunction;
    tangon = function(argFoo) {
        michal = 0;
        entity = copyRestArgs(michal);
        return entity;
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot17 = tangon;
    tangon = -100;
    var _closure1_slot18 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: ChannelCallVideoGrid
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            golfie = entity.channel;
            var _closure2_slot0 = golfie;
            oscard = undefined;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = oscard;
            michal = _closure1_slot8;
            entity = michal.getCurrentUser;
            tangon = entity.bind(michal)();
            entity = null;
            option = entity == tangon;
            michal = undefined;
            if(option) { _fun00020_ip = 56; continue _fun00019 }
 51:
            michal = tangon.id;
 56:
            _closure2_slot1 = michal;
            option = _closure1_slot1;
            michal = _closure1_slot2;
            tangon = 12;
            tangon = michal[tangon];
            tangon = option.bind(oscard)(tangon);
            option = tangon.bind(oscard)();
            verify = _closure1_slot0;
            tangon = 13;
            michal = michal[tangon];
            yankee = verify.bind(oscard)(michal);
            offset = yankee.useStateFromStores;
            michal = _closure1_slot9;
            verify = new Array(1);
            verify[0] = michal;
            michal = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.isInChannel;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = offset.bind(yankee)(verify, michal);
            if(michal) { _fun00020_ip = 156; continue _fun00019 }
 133:
            offset = entity == option;
            verify = undefined;
            if(offset) { _fun00020_ip = 147; continue _fun00019 }
 142:
            verify = option.channelId;
 147:
            option = golfie.id;
            michal = verify === option;
 156:
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            tangon = romeon[tangon];
            foxtra = option.bind(oscard)(tangon);
            yankee = foxtra.useStateFromStores;
            tangon = _closure1_slot7;
            offset = new Array(1);
            offset[0] = tangon;
            verify = new Array(1);
            verify[0] = golfie;
            tangon = 14;
            tangon = romeon[tangon];
            tangon = option.bind(oscard)(tangon);
            backup = tangon.areParticipantsEqual;
            sizing = function() {
                tangon = _closure1_slot7;
                zuuluu = tangon.getFilteredParticipants;
                michal = _closure2_slot0;
                entity = michal.id;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = new Array(2);
                entity[0] = zuuluu;
                zuuluu = tangon.getParticipantsVersion;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity[1] = michal;
                return entity;
            };
            result = foxtra;
            output = offset;
            kiloes = verify;
            verify = result[yankee](output, sizing, kiloes, backup, foxtra);
            option = _closure1_slot3;
            tangon = 1;
            option = option.bind(oscard)(verify, tangon);
            offset = 0;
            yankee = option[offset];
            verify = _closure1_slot1;
            option = 15;
            option = romeon[option];
            option = verify.bind(oscard)(option);
            option = option.bind(oscard)();
            _closure2_slot2 = option;
            verify = yankee.filter;
            option = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = argFoo;
                    entity = _closure1_slot11;
                    zuuluu = undefined;
                    entity = entity.bind(zuuluu)(michal);
                    if(!entity) { _fun00022_ip = 51; continue _fun00021 }
 20:
                    oscard = _closure2_slot2;
                    tangon = null;
                    oscard = tangon == oscard;
                    zuuluu = undefined;
                    if(oscard) { _fun00022_ip = 47; continue _fun00021 }
 38:
                    report = _closure2_slot2;
                    zuuluu = report.applicationId;
 47:
                    entity = tangon != zuuluu;
 51:
                    if(!entity) { _fun00022_ip = 75; continue _fun00021 }
 54:
                    zuuluu = michal.applicationId;
                    michal = _closure2_slot2;
                    michal = michal.applicationId;
                    entity = zuuluu === michal;
 75:
                    entity = !entity;
                    return entity;
                }
            };
            yankee = verify.bind(yankee)(option);
            verify = yankee.filter;
            option = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = argFoo;
                    zuuluu = _closure1_slot10;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    if(!entity) { _fun00024_ip = 41; continue _fun00023 }
 20:
                    michal = michal.user;
                    zuuluu = michal.id;
                    michal = _closure2_slot1;
                    entity = zuuluu === michal;
 41:
                    entity = !entity;
                    return entity;
                }
            };
            yankee = verify.bind(yankee)(option);
            verify = yankee.length;
            option = 2;
            option = option !== verify;
            if(!option) { _fun00020_ip = 340; continue _fun00019 }
 328:
            romeon = yankee.length;
            verify = 3;
            option = verify !== romeon;
 340:
            verify = yankee;
            if(option) { _fun00020_ip = 363; continue _fun00019 }
 346:
            option = yankee.filter;
            report = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.id;
                    tangon = entity.type;
                    entity = _closure2_slot1;
                    entity = zuuluu !== entity;
                    if(entity) { _fun00026_ip = 58; continue _fun00025 }
 27:
                    michal = _closure2_slot1;
                    michal = zuuluu === michal;
                    if(!michal) { _fun00026_ip = 55; continue _fun00025 }
 38:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.USER;
                    michal = tangon !== zuuluu;
 55:
                    entity = michal;
 58:
                    return entity;
                }
            };
            verify = option.bind(yankee)(report);
 363:
            entity = null;
            if(!michal) { _fun00020_ip = 508; continue _fun00019 }
 371:
            michal = verify.length;
            if(!(offset !== michal)) { _fun00020_ip = 469; continue _fun00019 }
 380:
            michal = verify.length;
            if(!(tangon !== michal)) { _fun00020_ip = 416; continue _fun00019 }
 389:
            report = _closure1_slot13;
            tangon = _closure1_slot19;
            michal = {};
            michal['channel'] = golfie;
            michal['filteredParticipants'] = verify;
            michal = report.bind(oscard)(tangon, michal);
            _fun00020_ip = 467; continue _fun00019;
 416:
            option = _closure1_slot13;
            report = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 17;
            tangon = yankee[tangon];
            tangon = report.bind(oscard)(tangon);
            report = tangon.ChannelCallSingleController;
            tangon = {};
            tangon['channel'] = golfie;
            verify = verify[offset];
            tangon['selectedParticipant'] = verify;
            michal = option.bind(oscard)(report, tangon);
 467:
            _fun00020_ip = 505; continue _fun00019;
 469:
            report = _closure1_slot13;
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 16;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = {};
            zuuluu['channel'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 505:
            entity = michal;
 508:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/native/components/ChannelCallVideoGrid.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();