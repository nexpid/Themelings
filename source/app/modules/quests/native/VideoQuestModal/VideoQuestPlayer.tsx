// app/modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    report = golfie[tangon];
    tangon = argCor;
    option = tangon.bind(entity)(report);
    var _closure1_slot4 = option;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.View;
    var _closure1_slot5 = report;
    sizing = tangon.StyleSheet;
    report = tangon.Pressable;
    var _closure1_slot6 = report;
    tangon = tangon.ActivityIndicator;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AppStates;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.jsx;
    var _closure1_slot11 = report;
    tangon = tangon.jsxs;
    var _closure1_slot12 = tangon;
    report = option.memo;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    tangon = report.bind(option)(tangon);
    var _closure1_slot13 = tangon;
    tangon = {};
    report = 'function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}';
    tangon['code'] = report;
    var _closure1_slot14 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar) { // Original name: hasVideoEnded
            michal = argBar;
            entity = 1;
            michal = michal - entity;
            entity = argFoo;
            entity = entity >= michal;
            return entity;
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 3281537893520.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot14;
        entity['__initData'] = michal;
        return entity;
    };
    offset = tangon.bind(entity)();
    var _closure1_slot15 = offset;
    report = {};
    tangon = 'function VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}';
    report['code'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = argCor;
            report = _closure1_slot15;
            zuuluu = undefined;
            entity = argBaz;
            entity = report.bind(zuuluu)(tangon, entity);
            entity = !entity;
            if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 30:
            if(michal) { _fun00002_ip = 47; continue _fun00001 }
 33:
            report = argBar;
            zuuluu = 1;
            zuuluu = report - zuuluu;
            michal = tangon <= zuuluu;
 47:
            entity = michal;
 50:
            return entity;
        }
    };
    verify = {};
    verify['hasVideoEnded'] = offset;
    tangon['__closure'] = verify;
    verify = 6684695599942.0;
    tangon['__workletHash'] = verify;
    tangon['__initData'] = report;
    var _closure1_slot16 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    verify = oscard.bind(entity)(tangon);
    report = verify.createStyles;
    tangon = {};
    offset = {};
    source = sizing.absoluteFillObject;
    ctrled = offset;
    yankee = copyDataProperties(ctrled, source);
    yankee = 9;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_TERTIARY;
    output = 'backgroundColor';
    offset[output] = foxtra;
    tangon['container'] = offset;
    offset = {};
    source = sizing.absoluteFillObject;
    ctrled = offset;
    foxtra = copyDataProperties(ctrled, source);
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_TERTIARY;
    offset[output] = foxtra;
    backup = 'center';
    kiloes = 'justifyContent';
    offset[kiloes] = backup;
    foxtra = 'alignItems';
    offset[foxtra] = backup;
    tangon['loadingContainer'] = offset;
    offset = {'height': '100%', 'width': '100%'};
    tangon['video'] = offset;
    offset = {'position': 'relative', 'height': '100%', 'width': '100%'};
    tangon['videoContainer'] = offset;
    offset = {};
    source = sizing.absoluteFillObject;
    ctrled = offset;
    sizing = copyDataProperties(ctrled, source);
    sizing = 10;
    sizing = golfie[sizing];
    result = romeon.bind(entity)(sizing);
    sizing = golfie[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.BLACK_500;
    echoed = result.bind(entity)(sizing);
    result = echoed.alpha;
    sizing = 0.5;
    result = result.bind(echoed)(sizing);
    sizing = result.hex;
    sizing = sizing.bind(result)();
    offset[output] = sizing;
    offset[kiloes] = backup;
    offset[foxtra] = backup;
    backup = 'column';
    foxtra = 'flexDirection';
    offset[foxtra] = backup;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    backup = foxtra.PX_24;
    foxtra = 'gap';
    offset[foxtra] = backup;
    tangon['controls'] = offset;
    offset = {'flex': 1, 'flexDirection': 'row', 'justifyContent': 'flex-end', 'width': '100%'};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['padding'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['gap'] = foxtra;
    tangon['controlsTopBottom'] = offset;
    offset = {'justifyContent': 'center', 'alignItems': 'center', 'flexGrow': 1, 'flexDirection': 'row'};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_24;
    offset['gap'] = foxtra;
    tangon['controlsMiddle'] = offset;
    offset = {'position': 'absolute', 'bottom': 0, 'right': 0, 'left': 0, 'justifyContent': 'flex-end', 'height': null, 'overflow': 'hidden'};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['height'] = foxtra;
    tangon['progressContainer'] = offset;
    offset = {'height': 1, 'backgroundColor': null, 'shadowOffset': null, 'shadowRadius': 6, 'shadowOpacity': 1, 'elevation': 5, 'shadowColor': '#FFFFFF'};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.WHITE;
    offset['backgroundColor'] = foxtra;
    foxtra = {'width': 0, 'height': 0};
    offset['shadowOffset'] = foxtra;
    tangon['progress'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_NORMAL;
    offset['color'] = foxtra;
    tangon['icon'] = offset;
    offset = {};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.TEXT_SECONDARY;
    offset['color'] = yankee;
    tangon['iconDisabled'] = offset;
    tangon = report.bind(verify)(tangon);
    var _closure1_slot17 = tangon;
    tangon = {};
    report = 'paused';
    tangon['PAUSED'] = report;
    report = 'playing';
    tangon['PLAYING'] = report;
    report = 'ended';
    tangon['ENDED'] = report;
    report = 'loading';
    tangon['LOADING'] = report;
    report = 'errored';
    tangon['ERRORED'] = report;
    var _closure1_slot18 = tangon;
    report = {};
    verify = "function VideoQuestPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused,withSpring,SUBTLE_SPRING}=this.__closure;const show=hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    report['code'] = verify;
    var _closure1_slot19 = report;
    report = {};
    verify = 'function VideoQuestPlayerTsx4(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+"%",timingFast,\'animate-always\')};}';
    report['code'] = verify;
    var _closure1_slot20 = report;
    report = option.memo;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.style;
            cntext = entity.onLoad;
            var _closure2_slot0 = cntext;
            kiloes = entity.orientation;
            sequen = entity.safeAreaInsets;
            variable36 = entity.handleToggleCaptions;
            status = entity.handleOpenTranscript;
            michal = entity.externallyPaused;
            var _closure2_slot1 = michal;
            variable39 = entity.captionsEnabled;
            report = undefined;
            if(!(variable39 === report)) { _fun00004_ip = 68; continue _fun00003 }
 66:
            variable39 = false;
 68:
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            var _closure2_slot21 = report;
            var _closure2_slot22 = report;
            var _closure2_slot23 = report;
            var _closure2_slot24 = report;
            var _closure2_slot25 = report;
            var _closure2_slot26 = report;
            var _closure2_slot27 = report;
            var _closure2_slot28 = report;
            var _closure2_slot29 = report;
            var _closure2_slot30 = report;
            var _closure2_slot31 = report;
            var _closure2_slot32 = report;
            var _closure2_slot33 = report;
            var _closure2_slot34 = report;
            entity = _closure1_slot17;
            sizing = entity.bind(report)();
            oscard = _closure1_slot4;
            zuuluu = oscard.useRef;
            entity = null;
            variable46 = zuuluu.bind(oscard)(entity);
            _closure2_slot2 = variable46;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            variable49 = 11;
            zuuluu = option[variable49];
            verify = oscard.bind(report)(zuuluu);
            zuuluu = verify.useVideoQuestModalContext;
            zuuluu = zuuluu.bind(verify)();
            vacuum = zuuluu.quest;
            _closure2_slot3 = vacuum;
            yankee = zuuluu.videoSessionId;
            zuuluu = 12;
            zuuluu = option[zuuluu];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.useQuestTaskDetails;
            variable41 = zuuluu.bind(oscard)(vacuum);
            _closure2_slot4 = variable41;
            oscard = vacuum.userStatus;
            option = entity == oscard;
            zuuluu = undefined;
            if(option) { _fun00004_ip = 325; continue _fun00003 }
 319:
            zuuluu = oscard.completedAt;
 325:
            variable45 = entity != zuuluu;
            _closure2_slot5 = variable45;
            verify = _closure1_slot4;
            option = verify.useMemo;
            oscard = new Array(1);
            oscard[0] = vacuum;
            zuuluu = function() {
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 13;
                zuuluu = oscard[entity];
                michal = undefined;
                tangon = report.bind(michal)(zuuluu);
                zuuluu = tangon.resolveVideoQuestAsset;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.VideoQuestAssetId;
                michal = entity.VIDEO_PLAYER_VIDEO;
                entity = _closure2_slot3;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            foxtra = option.bind(verify)(zuuluu, oscard);
            _closure2_slot6 = foxtra;
            option = verify.useMemo;
            oscard = new Array(1);
            oscard[0] = vacuum;
            zuuluu = function() {
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 13;
                zuuluu = oscard[entity];
                michal = undefined;
                tangon = report.bind(michal)(zuuluu);
                zuuluu = tangon.resolveVideoQuestAsset;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.VideoQuestAssetId;
                michal = entity.VIDEO_PLAYER_VIDEO_HLS;
                entity = _closure2_slot3;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            echoed = option.bind(verify)(zuuluu, oscard);
            _closure2_slot7 = echoed;
            oscard = entity == echoed;
            zuuluu = undefined;
            if(oscard) { _fun00004_ip = 411; continue _fun00003 }
 406:
            zuuluu = echoed.url;
 411:
            if(!(entity == zuuluu)) { _fun00004_ip = 449; continue _fun00003 }
 415:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 13;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            option = zuuluu.VIDEO_PLAYER_VIDEO;
            _fun00004_ip = 481; continue _fun00003;
 449:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 13;
            zuuluu = verify[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            option = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
 481:
            verify = _closure1_slot4;
            oscard = verify.useState;
            zuuluu = variable41.targetSeconds;
            zuuluu = oscard.bind(verify)(zuuluu);
            oscard = _closure1_slot3;
            variable51 = 2;
            zuuluu = oscard.bind(report)(zuuluu, variable51);
            ctrled = 0;
            variable37 = zuuluu[ctrled];
            _closure2_slot8 = variable37;
            variable43 = 1;
            zuuluu = zuuluu[variable43];
            _closure2_slot9 = zuuluu;
            romeon = _closure1_slot9;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.setVideoProgress;
                return entity;
            };
            variable40 = romeon.bind(report)(zuuluu);
            _closure2_slot10 = variable40;
            offset = _closure1_slot0;
            output = _closure1_slot2;
            zuuluu = 14;
            zuuluu = output[zuuluu];
            zuuluu = offset.bind(report)(zuuluu);
            offset = zuuluu.shallow;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    michal = entity.videoProgress;
                    entity = _closure2_slot3;
                    entity = entity.id;
                    entity = michal[entity];
                    michal = null;
                    if(!(michal == entity)) { _fun00006_ip = 59; continue _fun00005 }
 31:
                    michal = {};
                    tangon = _closure2_slot4;
                    tangon = tangon.progressSeconds;
                    michal['timestampSec'] = tangon;
                    zuuluu = _closure2_slot8;
                    michal['duration'] = zuuluu;
                    entity = michal;
 59:
                    return entity;
                }
            };
            source = romeon.bind(report)(zuuluu, offset);
            _closure2_slot11 = source;
            offset = verify.useState;
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.LOADING;
            zuuluu = offset.bind(verify)(zuuluu);
            zuuluu = oscard.bind(report)(zuuluu, variable51);
            equals = zuuluu[ctrled];
            _closure2_slot12 = equals;
            zuuluu = zuuluu[variable43];
            _closure2_slot13 = zuuluu;
            zuuluu = verify.useState;
            offset = false;
            zuuluu = zuuluu.bind(verify)(offset);
            zuuluu = oscard.bind(report)(zuuluu, variable51);
            romeon = zuuluu[ctrled];
            _closure2_slot14 = romeon;
            zuuluu = zuuluu[variable43];
            _closure2_slot15 = zuuluu;
            whisks = romeon;
            if(!whisks) { _fun00004_ip = 694; continue _fun00003 }
 680:
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.ENDED;
            whisks = equals === zuuluu;
 694:
            if(!whisks) { _fun00004_ip = 718; continue _fun00003 }
 697:
            verify = _closure1_slot15;
            oscard = source.timestampSec;
            zuuluu = source.duration;
            whisks = verify.bind(report)(oscard, zuuluu);
 718:
            _closure2_slot16 = whisks;
            papara = _closure1_slot0;
            verify = _closure1_slot2;
            result = 15;
            zuuluu = verify[result];
            oscard = papara.bind(report)(zuuluu);
            zuuluu = oscard.useSharedValue;
            variable47 = zuuluu.bind(oscard)(offset);
            _closure2_slot17 = variable47;
            zuuluu = verify[result];
            output = papara.bind(report)(zuuluu);
            oscard = output.useAnimatedStyle;
            zuuluu = function() { // Original name: F
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot14;
                    if(!zuuluu) { _fun00008_ip = 112; continue _fun00007 }
 10:
                    tangon = _closure2_slot17;
                    entity = tangon.get;
                    entity = entity.bind(tangon)();
                    if(entity) { _fun00008_ip = 47; continue _fun00007 }
 26:
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.PAUSED;
                    entity = report === tangon;
 47:
                    if(entity) { _fun00008_ip = 71; continue _fun00007 }
 50:
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.ENDED;
                    entity = report === tangon;
 71:
                    if(entity) { _fun00008_ip = 95; continue _fun00007 }
 74:
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.ERRORED;
                    entity = report === tangon;
 95:
                    if(entity) { _fun00008_ip = 102; continue _fun00007 }
 98:
                    entity = _closure2_slot16;
 102:
                    if(entity) { _fun00008_ip = 109; continue _fun00007 }
 105:
                    entity = _closure2_slot1;
 109:
                    zuuluu = entity;
 112:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 16;
                    tangon = oscard[tangon];
                    option = undefined;
                    oscard = report.bind(option)(tangon);
                    report = oscard.withSpring;
                    tangon = 0;
                    if(!zuuluu) { _fun00008_ip = 152; continue _fun00007 }
 149:
                    tangon = 1;
 152:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 17;
                    michal = verify[michal];
                    michal = golfie.bind(option)(michal);
                    michal = michal.SUBTLE_SPRING;
                    michal = report.bind(oscard)(tangon, michal);
                    entity['opacity'] = michal;
                    michal = 'none';
                    if(!zuuluu) { _fun00008_ip = 199; continue _fun00007 }
 195:
                    michal = 'auto';
 199:
                    entity['pointerEvents'] = michal;
                    return entity;
                }
            };
            update = {};
            update['hasLoaded'] = romeon;
            update['showControls'] = variable47;
            update['playerState'] = equals;
            romeon = _closure1_slot18;
            update['PlayerState'] = romeon;
            update['isVideoEnded'] = whisks;
            update['externallyPaused'] = michal;
            config = 16;
            config = verify[config];
            config = papara.bind(report)(config);
            config = config.withSpring;
            update['withSpring'] = config;
            config = 17;
            config = verify[config];
            config = papara.bind(report)(config);
            config = config.SUBTLE_SPRING;
            update['SUBTLE_SPRING'] = config;
            zuuluu['__closure'] = update;
            update = 4466097445215.0;
            zuuluu['__workletHash'] = update;
            update = _closure1_slot19;
            zuuluu['__initData'] = update;
            update = oscard.bind(output)(zuuluu);
            zuuluu = verify[result];
            oscard = papara.bind(report)(zuuluu);
            zuuluu = oscard.useSharedValue;
            variable48 = zuuluu.bind(oscard)(ctrled);
            _closure2_slot18 = variable48;
            zuuluu = verify[result];
            output = papara.bind(report)(zuuluu);
            oscard = output.useAnimatedStyle;
            zuuluu = function() { // Original name: Q
                entity = {};
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 18;
                michal = option[michal];
                tangon = undefined;
                oscard = golfie.bind(tangon)(michal);
                report = oscard.withTiming;
                zuuluu = _closure2_slot18;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                michal = 100;
                zuuluu = michal * zuuluu;
                michal = 19;
                michal = option[michal];
                michal = golfie.bind(tangon)(michal);
                tangon = michal.timingFast;
                michal = '%';
                zuuluu = zuuluu + michal;
                michal = 'animate-always';
                michal = report.bind(oscard)(zuuluu, tangon, michal);
                entity['width'] = michal;
                return entity;
            };
            config = {};
            record = 18;
            record = verify[record];
            record = papara.bind(report)(record);
            record = record.withTiming;
            config['withTiming'] = record;
            config['progress'] = variable48;
            record = 19;
            record = verify[record];
            record = papara.bind(report)(record);
            record = record.timingFast;
            config['timingFast'] = record;
            zuuluu['__closure'] = config;
            config = 13895400048400.0;
            zuuluu['__workletHash'] = config;
            config = _closure1_slot20;
            zuuluu['__initData'] = config;
            output = oscard.bind(output)(zuuluu);
            variable38 = _closure1_slot4;
            oscard = variable38.useRef;
            zuuluu = -1;
            zuuluu = oscard.bind(variable38)(zuuluu);
            _closure2_slot19 = zuuluu;
            config = variable38.useCallback;
            oscard = new Array(1);
            oscard[0] = variable47;
            zuuluu = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                entity = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        yankee = 0;
                        tangon = copyRestArgs(yankee);
                        entity = global;
                        golfie = entity.clearTimeout;
                        zuuluu = _closure2_slot19;
                        oscard = zuuluu.current;
                        zuuluu = undefined;
                        oscard = golfie.bind(zuuluu)(oscard);
                        option = _closure2_slot17;
                        golfie = option.set;
                        oscard = true;
                        oscard = golfie.bind(option)(oscard);
                        michal = _closure2_slot19;
                        golfie = entity.setTimeout;
                        oscard = function() {
                            zuuluu = _closure2_slot17;
                            michal = zuuluu.set;
                            entity = false;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity = 2000;
                        entity = golfie.bind(zuuluu)(oscard, entity);
                        michal['current'] = entity;
                        oscard = _closure3_slot0;
                        michal = null;
                        if(!(michal == oscard)) { _fun00010_ip = 101; continue _fun00009 }
 99:
                        return zuuluu;
 101:
                        michal = _closure3_slot0;
                        entity = new Array(0);
                        yankee = entity;
                        offset = tangon;
                        verify = 0;
                        tangon = arraySpread(yankee, offset, verify);
                        yankee = michal;
                        offset = entity;
                        verify = undefined;
                        entity = apply(yankee, offset, verify);
                        return entity;
                    }
                };
                return entity;
            };
            sierra = config.bind(variable38)(zuuluu, oscard);
            limora = _closure1_slot1;
            zuuluu = 20;
            zuuluu = verify[zuuluu];
            oscard = limora.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['duration'] = variable37;
            zuuluu['isQuestCompleted'] = variable45;
            zuuluu['playerState'] = equals;
            config = vacuum.id;
            zuuluu['questId'] = config;
            zuuluu['videoSessionId'] = yankee;
            zuuluu['videoAssetId'] = option;
            yankee = oscard.bind(report)(zuuluu);
            variable44 = yankee.handleBufferAnalytics;
            option = yankee.handleEndAnalytics;
            _closure2_slot20 = option;
            zuuluu = yankee.handleErrorAnalytics;
            _closure2_slot21 = zuuluu;
            variable50 = yankee.handleLoadAnalytics;
            _closure2_slot22 = variable50;
            oscard = yankee.handleLoadStartAnalytics;
            _closure2_slot23 = oscard;
            variable42 = yankee.handlePausePlaybackAnalytics;
            _closure2_slot24 = variable42;
            papara = yankee.handleProgressAnalytics;
            _closure2_slot25 = papara;
            target = yankee.handleReadyForDisplayAnalytics;
            _closure2_slot26 = target;
            config = yankee.handleResumePlaybackAnalytics;
            _closure2_slot27 = config;
            record = yankee.handleSeekAnalytics;
            _closure2_slot28 = record;
            yankee = variable38.useState;
            quebec = yankee.bind(variable38)(offset);
            yankee = _closure1_slot3;
            quebec = yankee.bind(report)(quebec, variable51);
            yankee = quebec[ctrled];
            quebec = quebec[variable43];
            _closure2_slot29 = quebec;
            variable43 = variable38.useCallback;
            quebec = new Array(1);
            quebec[0] = target;
            target = function() {
                zuuluu = _closure2_slot26;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                zuuluu = _closure2_slot29;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            target = variable43.bind(variable38)(target, quebec);
            variable43 = variable38.useCallback;
            quebec = new Array(4);
            quebec[0] = variable45;
            variable51 = source.timestampSec;
            quebec[1] = variable51;
            quebec[2] = variable50;
            quebec[3] = cntext;
            cntext = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = zuuluu.duration;
                    tangon = _closure2_slot9;
                    entity = undefined;
                    tangon = tangon.bind(entity)(golfie);
                    report = _closure2_slot15;
                    tangon = true;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot22;
                    tangon = tangon.bind(entity)();
                    tangon = _closure2_slot2;
                    tangon = tangon.current;
                    report = null;
                    if(!(report != tangon)) { _fun00012_ip = 156; continue _fun00011 }
 56:
                    tangon = _closure2_slot11;
                    option = tangon.timestampSec;
                    oscard = _closure2_slot5;
                    tangon = !oscard;
                    if(oscard) { _fun00012_ip = 87; continue _fun00011 }
 76:
                    oscard = 3;
                    oscard = golfie - oscard;
                    tangon = option < oscard;
 87:
                    if(!tangon) { _fun00012_ip = 117; continue _fun00011 }
 90:
                    tangon = _closure2_slot2;
                    golfie = tangon.current;
                    oscard = golfie.seek;
                    tangon = 1;
                    tangon = option - tangon;
                    tangon = oscard.bind(golfie)(tangon);
 117:
                    oscard = _closure2_slot13;
                    tangon = _closure1_slot18;
                    tangon = tangon.PLAYING;
                    tangon = oscard.bind(entity)(tangon);
                    tangon = _closure2_slot0;
                    if(!(report != tangon)) { _fun00012_ip = 156; continue _fun00011 }
 147:
                    michal = _closure2_slot0;
                    michal = michal.bind(entity)(zuuluu);
 156:
                    return entity;
                }
            };
            variable43 = variable43.bind(variable38)(cntext, quebec);
            quebec = variable38.useCallback;
            cntext = new Array(4);
            cntext[0] = equals;
            cntext[1] = variable42;
            cntext[2] = config;
            cntext[3] = whisks;
            config = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = arguments[0];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00014_ip = 11; continue _fun00013 }
 9:
                    michal = {};
 11:
                    tangon = michal.shouldRestartVideo;
                    if(!(tangon === entity)) { _fun00014_ip = 23; continue _fun00013 }
 21:
                    tangon = true;
 23:
                    oscard = _closure2_slot12;
                    report = _closure1_slot18;
                    report = report.ERRORED;
                    if(!(oscard !== report)) { _fun00014_ip = 172; continue _fun00013 }
 50:
                    report = _closure2_slot16;
                    if(!report) { _fun00014_ip = 60; continue _fun00013 }
 57:
                    if(tangon) { _fun00014_ip = 172; continue _fun00013 }
 60:
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.PAUSED;
                    if(!(report !== tangon)) { _fun00014_ip = 143; continue _fun00013 }
 78:
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.LOADING;
                    if(!(report !== tangon)) { _fun00014_ip = 143; continue _fun00013 }
 96:
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.PLAYING;
                    if(!(report === tangon)) { _fun00014_ip = 227; continue _fun00013 }
 114:
                    report = _closure2_slot13;
                    tangon = _closure1_slot18;
                    tangon = tangon.PAUSED;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot24;
                    tangon = tangon.bind(entity)();
                    _fun00014_ip = 227; continue _fun00013;
 143:
                    report = _closure2_slot13;
                    tangon = _closure1_slot18;
                    tangon = tangon.PLAYING;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot27;
                    tangon = tangon.bind(entity)();
                    _fun00014_ip = 227; continue _fun00013;
 172:
                    tangon = _closure2_slot2;
                    oscard = tangon.current;
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00014_ip = 200; continue _fun00013 }
 187:
                    report = oscard.seek;
                    tangon = 0;
                    tangon = report.bind(oscard)(tangon);
 200:
                    tangon = _closure2_slot13;
                    zuuluu = _closure1_slot18;
                    zuuluu = zuuluu.PLAYING;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot27;
                    michal = michal.bind(entity)();
 227:
                    return entity;
                }
            };
            variable42 = quebec.bind(variable38)(config, cntext);
            _closure2_slot30 = variable42;
            quebec = variable38.useCallback;
            cntext = new Array(1);
            cntext[0] = variable42;
            config = function() {
                michal = _closure2_slot30;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            quebec = quebec.bind(variable38)(config, cntext);
            variable50 = variable38.useCallback;
            cntext = function() {
                entity = undefined;
                return entity;
            };
            config = new Array(0);
            config = variable50.bind(variable38)(cntext, config);
            cntext = variable38.useContext;
            verify = verify[variable49];
            verify = limora.bind(report)(verify);
            verify = cntext.bind(variable38)(verify);
            verify = verify.isModalPanGestureActive;
            _closure2_slot31 = verify;
            limora = variable38.useCallback;
            cntext = new Array(3);
            cntext[0] = variable47;
            cntext[1] = variable42;
            cntext[2] = verify;
            verify = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot31;
                    michal = michal.current;
                    if(michal) { _fun00016_ip = 67; continue _fun00015 }
 15:
                    zuuluu = _closure2_slot17;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00016_ip = 47; continue _fun00015 }
 31:
                    tangon = _closure2_slot17;
                    zuuluu = tangon.set;
                    michal = false;
                    michal = zuuluu.bind(tangon)(michal);
 47:
                    zuuluu = _closure2_slot30;
                    michal = {};
                    entity = false;
                    michal['shouldRestartVideo'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 67:
                    entity = undefined;
                    return entity;
                }
            };
            verify = limora.bind(variable38)(verify, cntext);
            romeon = romeon.ERRORED;
            limora = equals === romeon;
            if(limora) { _fun00004_ip = 1535; continue _fun00003 }
 1502:
            variable42 = _closure1_slot16;
            variable55 = source.timestampSec;
            variable54 = source.maxTimestampSec;
            variable53 = source.duration;
            variable56 = undefined;
            variable52 = variable45;
            romeon = variable56[variable42](variable55, variable54, variable53, variable52, variable51);
            limora = !romeon;
 1535:
            _closure2_slot32 = limora;
            romeon = _closure1_slot4;
            variable42 = romeon.useCallback;
            variable38 = new Array(5);
            variable38[0] = variable37;
            variable38[1] = variable48;
            cntext = source.maxTimestampSec;
            variable38[2] = cntext;
            variable38[3] = record;
            variable38[4] = limora;
            cntext = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 112; continue _fun00017 }
 18:
                    zuuluu = _closure2_slot18;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot8;
                    zuuluu = zuuluu * michal;
                    michal = _closure2_slot32;
                    if(michal) { _fun00018_ip = 112; continue _fun00017 }
 46:
                    michal = global;
                    report = michal.Math;
                    tangon = report.min;
                    michal = 10;
                    zuuluu = zuuluu + michal;
                    michal = _closure2_slot11;
                    michal = michal.maxTimestampSec;
                    tangon = tangon.bind(report)(zuuluu, michal);
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = zuuluu.seek;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = _closure2_slot28;
                    entity = undefined;
                    entity = michal.bind(entity)();
 112:
                    entity = undefined;
                    return entity;
                }
            };
            cntext = variable42.bind(romeon)(cntext, variable38);
            variable45 = romeon.useCallback;
            variable42 = new Array(3);
            variable42[0] = variable37;
            variable42[1] = variable48;
            variable42[2] = record;
            variable38 = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00020_ip = 69; continue _fun00019 }
 18:
                    zuuluu = _closure2_slot8;
                    michal = 0;
                    if(!(zuuluu > michal)) { _fun00020_ip = 59; continue _fun00019 }
 28:
                    tangon = _closure2_slot18;
                    zuuluu = tangon.set;
                    michal = argFoo;
                    report = michal.currentTime;
                    michal = _closure2_slot8;
                    michal = report / michal;
                    michal = zuuluu.bind(tangon)(michal);
 59:
                    michal = _closure2_slot28;
                    entity = undefined;
                    entity = michal.bind(entity)();
 69:
                    entity = undefined;
                    return entity;
                }
            };
            variable42 = variable45.bind(romeon)(variable38, variable42);
            variable45 = romeon.useCallback;
            variable38 = new Array(4);
            variable38[0] = variable37;
            variable38[1] = variable48;
            variable38[2] = record;
            variable38[3] = equals;
            record = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = _closure2_slot2;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00022_ip = 209; continue _fun00021 }
 21:
                    zuuluu = _closure2_slot18;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = _closure2_slot8;
                    yankee = zuuluu * entity;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 21;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.isAndroid;
                    tangon = tangon.bind(report)();
                    if(!tangon) { _fun00022_ip = 99; continue _fun00021 }
 79:
                    tangon = _closure2_slot2;
                    report = tangon.current;
                    tangon = report.seek;
                    tangon = tangon.bind(report)(yankee);
 99:
                    tangon = _closure2_slot2;
                    oscard = tangon.current;
                    report = oscard.seek;
                    tangon = global;
                    verify = tangon.Math;
                    option = verify.max;
                    offset = tangon.Math;
                    golfie = offset.floor;
                    tangon = 10;
                    tangon = yankee - tangon;
                    golfie = golfie.bind(offset)(tangon);
                    tangon = 0;
                    tangon = option.bind(verify)(tangon, golfie);
                    tangon = report.bind(oscard)(tangon);
                    tangon = _closure2_slot28;
                    tangon = tangon.bind(zuuluu)();
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.ENDED;
                    if(!(report === tangon)) { _fun00022_ip = 209; continue _fun00021 }
 190:
                    michal = _closure2_slot13;
                    entity = _closure1_slot18;
                    entity = entity.PLAYING;
                    entity = michal.bind(zuuluu)(entity);
 209:
                    entity = undefined;
                    return entity;
                }
            };
            record = variable45.bind(romeon)(record, variable38);
            record = sierra.bind(report)(record);
            cntext = sierra.bind(report)(cntext);
            sierra = romeon.useRef;
            variable47 = sierra.bind(romeon)(ctrled);
            _closure2_slot33 = variable47;
            sierra = romeon.useRef;
            variable45 = sierra.bind(romeon)(ctrled);
            _closure2_slot34 = variable45;
            variable38 = romeon.useCallback;
            sierra = new Array(7);
            sierra[0] = variable48;
            sierra[1] = vacuum;
            sierra[2] = variable47;
            sierra[3] = variable45;
            variable41 = variable41.taskType;
            sierra[4] = variable41;
            sierra[5] = variable40;
            sierra[6] = papara;
            papara = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argFoo;
                    michal = entity.seekableDuration;
                    tangon = 0;
                    if(!(tangon !== michal)) { _fun00024_ip = 31; continue _fun00023 }
 15:
                    zuuluu = entity.currentTime;
                    michal = entity.seekableDuration;
                    tangon = zuuluu / michal;
 31:
                    report = entity.currentTime;
                    zuuluu = _closure2_slot33;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00024_ip = 178; continue _fun00023 }
 56:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 22;
                    zuuluu = oscard[zuuluu];
                    golfie = undefined;
                    option = report.bind(golfie)(zuuluu);
                    oscard = option.sendVideoProgress;
                    report = _closure2_slot3;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(option)(report, zuuluu);
                    oscard = _closure2_slot25;
                    report = entity.seekableDuration;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                    report = _closure2_slot33;
                    oscard = entity.currentTime;
                    zuuluu = 6;
                    oscard = oscard + zuuluu;
                    zuuluu = global;
                    golfie = zuuluu.Math;
                    zuuluu = golfie.random;
                    golfie = zuuluu.bind(golfie)();
                    zuuluu = 2;
                    zuuluu = zuuluu * golfie;
                    zuuluu = oscard + zuuluu;
                    report['current'] = zuuluu;
 178:
                    report = entity.currentTime;
                    zuuluu = _closure2_slot34;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00024_ip = 283; continue _fun00023 }
 197:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 23;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    option = oscard.bind(zuuluu)(report);
                    golfie = option.updateOptimisticProgress;
                    zuuluu = _closure2_slot3;
                    oscard = zuuluu.id;
                    zuuluu = _closure2_slot4;
                    report = zuuluu.taskType;
                    zuuluu = entity.currentTime;
                    zuuluu = golfie.bind(option)(oscard, report, zuuluu);
                    report = _closure2_slot34;
                    oscard = entity.currentTime;
                    zuuluu = 1;
                    zuuluu = oscard + zuuluu;
                    report['current'] = zuuluu;
 283:
                    golfie = _closure2_slot10;
                    zuuluu = _closure2_slot3;
                    oscard = zuuluu.id;
                    report = entity.currentTime;
                    zuuluu = entity.seekableDuration;
                    entity = undefined;
                    zuuluu = golfie.bind(entity)(oscard, report, zuuluu);
                    zuuluu = _closure2_slot18;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            variable41 = variable38.bind(romeon)(papara, sierra);
            sierra = romeon.useCallback;
            papara = new Array(3);
            papara[0] = variable37;
            papara[1] = vacuum;
            papara[2] = option;
            option = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 22;
                zuuluu = zuuluu[entity];
                entity = undefined;
                golfie = tangon.bind(entity)(zuuluu);
                oscard = golfie.sendVideoProgress;
                report = _closure2_slot3;
                tangon = _closure2_slot8;
                tangon = oscard.bind(golfie)(report, tangon);
                tangon = _closure2_slot20;
                tangon = tangon.bind(entity)();
                zuuluu = _closure2_slot13;
                michal = _closure1_slot18;
                michal = michal.ENDED;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            variable38 = sierra.bind(romeon)(option, papara);
            papara = romeon.useCallback;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                tangon = _closure2_slot13;
                entity = _closure1_slot18;
                zuuluu = entity.LOADING;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot23;
                michal = michal.bind(entity)();
                return entity;
            };
            variable40 = papara.bind(romeon)(oscard, option);
            option = romeon.useCallback;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function(argFoo) {
                tangon = _closure2_slot13;
                entity = _closure1_slot18;
                zuuluu = entity.ERRORED;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot21;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            variable37 = option.bind(romeon)(zuuluu, oscard);
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 24;
            zuuluu = option[zuuluu];
            papara = oscard.bind(report)(zuuluu);
            option = papara.useStateFromStores;
            zuuluu = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot8;
                entity = michal.getState;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = option.bind(papara)(oscard, zuuluu);
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.ACTIVE;
            zuuluu = oscard === zuuluu;
            option = romeon.useMemo;
            oscard = new Array(2);
            oscard[0] = echoed;
            oscard[1] = foxtra;
            tangon = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot6;
                    report = null;
                    michal = report == entity;
                    entity = null;
                    if(michal) { _fun00026_ip = 63; continue _fun00025 }
 18:
                    michal = {};
                    zuuluu = _closure2_slot7;
                    oscard = report == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00026_ip = 42; continue _fun00025 }
 33:
                    oscard = _closure2_slot7;
                    zuuluu = oscard.url;
 42:
                    if(!(report == zuuluu)) { _fun00026_ip = 55; continue _fun00025 }
 46:
                    tangon = _closure2_slot6;
                    zuuluu = tangon.url;
 55:
                    michal['uri'] = zuuluu;
                    entity = michal;
 63:
                    return entity;
                }
            };
            variable45 = option.bind(romeon)(tangon, oscard);
            if(!(entity != variable45)) { _fun00004_ip = 3785; continue _fun00003 }
 1944:
            sierra = !zuuluu;
            if(!zuuluu) { _fun00004_ip = 1964; continue _fun00003 }
 1950:
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.PAUSED;
            sierra = equals === zuuluu;
 1964:
            if(sierra) { _fun00004_ip = 1981; continue _fun00003 }
 1967:
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.LOADING;
            sierra = equals === zuuluu;
 1981:
            if(sierra) { _fun00004_ip = 1987; continue _fun00003 }
 1984:
            sierra = michal;
 1987:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot5;
            michal = {};
            option = sizing.container;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            michal['accessible'] = offset;
            option = _closure1_slot12;
            golfie = _closure1_slot6;
            oscard = {};
            romeon = sizing.videoContainer;
            oscard['style'] = romeon;
            oscard['onPress'] = verify;
            echoed = _closure1_slot0;
            verify = _closure1_slot2;
            papara = 25;
            romeon = verify[papara];
            romeon = echoed.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            verify = verify[papara];
            verify = echoed.bind(report)(verify);
            verify = verify.t;
            verify = verify.FlNoSU;
            verify = romeon.bind(foxtra)(verify);
            oscard['accessibilityLabel'] = verify;
            verify = _closure1_slot18;
            verify = verify.ERRORED;
            romeon = equals !== verify;
            if(!romeon) { _fun00004_ip = 2225; continue _fun00003 }
 2123:
            echoed = _closure1_slot11;
            foxtra = _closure1_slot13;
            verify = {'mixWithOthers': 'mix', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            verify['ref'] = variable46;
            variable46 = sizing.video;
            verify['style'] = variable46;
            verify['paused'] = sierra;
            verify['source'] = variable45;
            verify['onBuffer'] = variable44;
            verify['onLoad'] = variable43;
            verify['onSeek'] = variable42;
            verify['onProgress'] = variable41;
            verify['onLoadStart'] = variable40;
            verify['onEnd'] = variable38;
            verify['onError'] = variable37;
            verify['onReadyForDisplay'] = target;
            target = 'contain';
            verify['resizeMode'] = target;
            romeon = echoed.bind(report)(foxtra, verify);
 2225:
            verify = new Array(5);
            verify[0] = romeon;
            echoed = _closure1_slot11;
            foxtra = _closure1_slot0;
            target = _closure1_slot2;
            romeon = 26;
            romeon = target[romeon];
            romeon = foxtra.bind(report)(romeon);
            foxtra = romeon.VideoQuestCaptions;
            romeon = {};
            romeon['quest'] = vacuum;
            source = source.timestampSec;
            romeon['currentTime'] = source;
            romeon['visible'] = variable39;
            source = {};
            vacuum = entity == sequen;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2302; continue _fun00003 }
 2297:
            target = sequen.top;
 2302:
            variable37 = entity != target;
            vacuum = 0;
            if(!variable37) { _fun00004_ip = 2314; continue _fun00003 }
 2311:
            vacuum = target;
 2314:
            source['top'] = vacuum;
            vacuum = entity == sequen;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2332; continue _fun00003 }
 2327:
            target = sequen.bottom;
 2332:
            variable37 = entity != target;
            vacuum = 0;
            if(!variable37) { _fun00004_ip = 2344; continue _fun00003 }
 2341:
            vacuum = target;
 2344:
            source['bottom'] = vacuum;
            vacuum = entity == sequen;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2362; continue _fun00003 }
 2357:
            target = sequen.left;
 2362:
            variable37 = entity != target;
            vacuum = 0;
            if(!variable37) { _fun00004_ip = 2374; continue _fun00003 }
 2371:
            vacuum = target;
 2374:
            source['left'] = vacuum;
            target = entity == sequen;
            vacuum = undefined;
            if(target) { _fun00004_ip = 2392; continue _fun00003 }
 2387:
            vacuum = sequen.right;
 2392:
            sequen = entity != vacuum;
            ctrled = 0;
            if(!sequen) { _fun00004_ip = 2404; continue _fun00003 }
 2401:
            ctrled = vacuum;
 2404:
            source['right'] = ctrled;
            romeon['style'] = source;
            romeon = echoed.bind(report)(foxtra, romeon);
            verify[1] = romeon;
            yankee = !yankee;
            if(!yankee) { _fun00004_ip = 2477; continue _fun00003 }
 2428:
            echoed = _closure1_slot11;
            foxtra = _closure1_slot5;
            romeon = {};
            source = sizing.loadingContainer;
            romeon['style'] = source;
            ctrled = _closure1_slot7;
            source = {};
            vacuum = true;
            source['animating'] = vacuum;
            source = echoed.bind(report)(ctrled, source);
            romeon['children'] = source;
            yankee = echoed.bind(report)(foxtra, romeon);
 2477:
            verify[2] = yankee;
            foxtra = _closure1_slot12;
            romeon = _closure1_slot1;
            yankee = _closure1_slot2;
            yankee = yankee[result];
            yankee = romeon.bind(report)(yankee);
            romeon = yankee.View;
            yankee = {};
            source = sizing.controls;
            echoed = new Array(2);
            echoed[0] = source;
            echoed[1] = update;
            yankee['style'] = echoed;
            yankee['accessible'] = offset;
            offset = 'landscape';
            offset = offset === kiloes;
            echoed = offset;
            if(!offset) { _fun00004_ip = 2889; continue _fun00003 }
 2553:
            source = _closure1_slot12;
            update = _closure1_slot5;
            kiloes = {};
            ctrled = sizing.controlsTopBottom;
            kiloes['style'] = ctrled;
            target = _closure1_slot11;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            vacuum = 27;
            ctrled = variable40[vacuum];
            ctrled = variable37.bind(report)(ctrled);
            sequen = ctrled.PressableOpacity;
            ctrled = {};
            variable38 = 'button';
            ctrled['accessibilityRole'] = variable38;
            variable41 = variable40[papara];
            variable41 = variable37.bind(report)(variable41);
            variable43 = variable41.intl;
            variable42 = variable43.string;
            variable41 = variable40[papara];
            variable41 = variable37.bind(report)(variable41);
            variable41 = variable41.t;
            variable41 = variable41.bDSZOz;
            variable41 = variable42.bind(variable43)(variable41);
            ctrled['accessibilityLabel'] = variable41;
            ctrled['onPress'] = variable36;
            variable36 = 28;
            variable36 = variable40[variable36];
            variable36 = variable37.bind(report)(variable36);
            variable37 = variable36.ClosedCaptionsOutlineIcon;
            variable36 = {};
            if(variable39) { _fun00004_ip = 2701; continue _fun00003 }
 2688:
            variable39 = sizing.iconDisabled;
            variable39 = variable39.color;
            _fun00004_ip = 2711; continue _fun00003;
 2701:
            variable40 = sizing.icon;
            variable39 = variable40.color;
 2711:
            variable36['color'] = variable39;
            variable36 = target.bind(report)(variable37, variable36);
            ctrled['children'] = variable36;
            sequen = target.bind(report)(sequen, ctrled);
            ctrled = new Array(2);
            ctrled[0] = sequen;
            target = _closure1_slot11;
            variable36 = _closure1_slot0;
            variable37 = _closure1_slot2;
            vacuum = variable37[vacuum];
            vacuum = variable36.bind(report)(vacuum);
            sequen = vacuum.PressableOpacity;
            vacuum = {};
            vacuum['accessibilityRole'] = variable38;
            variable38 = variable37[papara];
            variable38 = variable36.bind(report)(variable38);
            variable40 = variable38.intl;
            variable39 = variable40.string;
            variable38 = variable37[papara];
            variable38 = variable36.bind(report)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.KCzjTk;
            variable38 = variable39.bind(variable40)(variable38);
            vacuum['accessibilityLabel'] = variable38;
            vacuum['onPress'] = status;
            status = 29;
            status = variable37[status];
            status = variable36.bind(report)(status);
            variable36 = status.TranscriptOutlineIcon;
            status = {};
            variable37 = sizing.iconDisabled;
            variable37 = variable37.color;
            status['color'] = variable37;
            status = target.bind(report)(variable36, status);
            vacuum['children'] = status;
            vacuum = target.bind(report)(sequen, vacuum);
            ctrled[1] = vacuum;
            kiloes['children'] = ctrled;
            echoed = source.bind(report)(update, kiloes);
 2889:
            kiloes = new Array(3);
            kiloes[0] = echoed;
            source = _closure1_slot12;
            update = _closure1_slot5;
            echoed = {};
            ctrled = sizing.controlsMiddle;
            echoed['style'] = ctrled;
            status = _closure1_slot11;
            variable39 = _closure1_slot0;
            variable36 = _closure1_slot2;
            vacuum = 30;
            ctrled = variable36[vacuum];
            ctrled = variable39.bind(report)(ctrled);
            sequen = ctrled.VideoQuestPlayerControlButton;
            ctrled = {};
            target = _closure1_slot18;
            target = target.ERRORED;
            target = equals === target;
            ctrled['disabled'] = target;
            target = 'button';
            ctrled['accessibilityRole'] = target;
            variable37 = variable36[papara];
            variable37 = variable39.bind(report)(variable37);
            variable40 = variable37.intl;
            variable38 = variable40.string;
            variable37 = variable36[papara];
            variable37 = variable39.bind(report)(variable37);
            variable37 = variable37.t;
            variable37 = variable37.r9s3Ul;
            variable37 = variable38.bind(variable40)(variable37);
            ctrled['accessibilityLabel'] = variable37;
            ctrled['onPress'] = record;
            record = 31;
            record = variable36[record];
            record = variable39.bind(report)(record);
            variable37 = record.SkipBackwardIcon;
            record = {'color': null, 'width': 16, 'height': 16};
            variable38 = sizing.icon;
            variable38 = variable38.color;
            record['color'] = variable38;
            record = status.bind(report)(variable37, record);
            ctrled['children'] = record;
            sequen = status.bind(report)(sequen, ctrled);
            ctrled = new Array(3);
            ctrled[0] = sequen;
            sequen = variable36[vacuum];
            sequen = variable39.bind(report)(sequen);
            record = sequen.VideoQuestPlayerControlButton;
            sequen = {};
            sequen['accessibilityRole'] = target;
            variable37 = variable36[papara];
            variable37 = variable39.bind(report)(variable37);
            variable38 = variable37.intl;
            variable37 = variable38.string;
            variable36 = variable36[papara];
            variable36 = variable39.bind(report)(variable36);
            variable36 = variable36.t;
            variable36 = variable36.RscU7O;
            variable36 = variable37.bind(variable38)(variable36);
            sequen['accessibilityLabel'] = variable36;
            sequen['onPress'] = quebec;
            if(whisks) { _fun00004_ip = 3262; continue _fun00003 }
 3177:
            whisks = _closure1_slot18;
            whisks = whisks.ERRORED;
            if(!(equals !== whisks)) { _fun00004_ip = 3262; continue _fun00003 }
 3191:
            equals = _closure1_slot11;
            quebec = _closure1_slot0;
            variable36 = _closure1_slot2;
            if(sierra) { _fun00004_ip = 3226; continue _fun00003 }
 3206:
            sierra = 34;
            sierra = variable36[sierra];
            sierra = quebec.bind(report)(sierra);
            whisks = sierra.PauseIcon;
            _fun00004_ip = 3244; continue _fun00003;
 3226:
            sierra = 33;
            sierra = variable36[sierra];
            sierra = quebec.bind(report)(sierra);
            whisks = sierra.PlayIcon;
 3244:
            sierra = {};
            quebec = 'lg';
            sierra['size'] = quebec;
            sierra = equals.bind(report)(whisks, sierra);
            _fun00004_ip = 3308; continue _fun00003;
 3262:
            quebec = _closure1_slot11;
            equals = _closure1_slot0;
            variable36 = _closure1_slot2;
            whisks = 32;
            whisks = variable36[whisks];
            whisks = equals.bind(report)(whisks);
            equals = whisks.RetryIcon;
            whisks = {};
            variable36 = 'lg';
            whisks['size'] = variable36;
            sierra = quebec.bind(report)(equals, whisks);
 3308:
            sequen['children'] = sierra;
            sequen = status.bind(report)(record, sequen);
            ctrled[1] = sequen;
            record = _closure1_slot11;
            status = _closure1_slot0;
            sierra = _closure1_slot2;
            vacuum = sierra[vacuum];
            vacuum = status.bind(report)(vacuum);
            sequen = vacuum.VideoQuestPlayerControlButton;
            vacuum = {};
            vacuum['disabled'] = limora;
            vacuum['accessibilityRole'] = target;
            limora = sierra[papara];
            limora = status.bind(report)(limora);
            equals = limora.intl;
            whisks = equals.string;
            limora = sierra[papara];
            limora = status.bind(report)(limora);
            limora = limora.t;
            limora = limora.zWDcND;
            limora = whisks.bind(equals)(limora);
            vacuum['accessibilityLabel'] = limora;
            vacuum['onPress'] = cntext;
            cntext = 35;
            cntext = sierra[cntext];
            cntext = status.bind(report)(cntext);
            status = cntext.SkipForwardIcon;
            cntext = {'color': null, 'width': 16, 'height': 16};
            sierra = sizing.icon;
            sierra = sierra.color;
            cntext['color'] = sierra;
            cntext = record.bind(report)(status, cntext);
            vacuum['children'] = cntext;
            vacuum = record.bind(report)(sequen, vacuum);
            ctrled[2] = vacuum;
            echoed['children'] = ctrled;
            echoed = source.bind(report)(update, echoed);
            kiloes[1] = echoed;
            echoed = offset;
            if(!offset) { _fun00004_ip = 3656; continue _fun00003 }
 3504:
            ctrled = _closure1_slot11;
            source = _closure1_slot5;
            update = {};
            vacuum = sizing.controlsTopBottom;
            update['style'] = vacuum;
            record = _closure1_slot0;
            cntext = _closure1_slot2;
            vacuum = 27;
            vacuum = cntext[vacuum];
            vacuum = record.bind(report)(vacuum);
            sequen = vacuum.PressableOpacity;
            vacuum = {};
            vacuum['accessibilityRole'] = target;
            target = cntext[papara];
            target = record.bind(report)(target);
            status = target.intl;
            target = status.string;
            papara = cntext[papara];
            papara = record.bind(report)(papara);
            papara = papara.t;
            papara = papara.vKZT5u;
            papara = target.bind(status)(papara);
            vacuum['accessibilityLabel'] = papara;
            vacuum['onPress'] = config;
            config = 36;
            config = cntext[config];
            config = record.bind(report)(config);
            record = config.FullscreenEnterIcon;
            config = {};
            config = ctrled.bind(report)(record, config);
            vacuum['children'] = config;
            vacuum = ctrled.bind(report)(sequen, vacuum);
            update['children'] = vacuum;
            echoed = ctrled.bind(report)(source, update);
 3656:
            kiloes[2] = echoed;
            yankee['children'] = kiloes;
            yankee = foxtra.bind(report)(romeon, yankee);
            verify[3] = yankee;
            if(!offset) { _fun00004_ip = 3759; continue _fun00003 }
 3677:
            foxtra = _closure1_slot11;
            romeon = _closure1_slot5;
            yankee = {};
            kiloes = sizing.progressContainer;
            yankee['style'] = kiloes;
            kiloes = _closure1_slot1;
            backup = _closure1_slot2;
            backup = backup[result];
            backup = kiloes.bind(report)(backup);
            kiloes = backup.View;
            backup = {};
            result = sizing.progress;
            sizing = new Array(2);
            sizing[0] = result;
            sizing[1] = output;
            backup['style'] = sizing;
            backup = foxtra.bind(report)(kiloes, backup);
            yankee['children'] = backup;
            offset = foxtra.bind(report)(romeon, yankee);
 3759:
            verify[4] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 3785:
            return entity;
        }
    };
    michal = report.bind(option)(michal);
    report = 37;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['PlayerState'] = tangon;
    zuuluu['VideoQuestPlayer'] = michal;
    return entity;
})();