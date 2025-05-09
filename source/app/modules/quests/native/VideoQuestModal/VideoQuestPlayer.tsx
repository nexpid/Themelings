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
    offset = {};
    result = 'absolute';
    offset['position'] = result;
    tangon['bufferingSpinner'] = offset;
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
            zuuluu = argFoo;
            golfie = zuuluu.style;
            record = zuuluu.onLoad;
            var _closure2_slot0 = record;
            kiloes = zuuluu.orientation;
            variable38 = zuuluu.safeAreaInsets;
            variable36 = zuuluu.handleToggleCaptions;
            status = zuuluu.handleOpenTranscript;
            michal = zuuluu.externallyPaused;
            var _closure2_slot1 = michal;
            variable39 = zuuluu.captionsEnabled;
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
            var _closure2_slot35 = report;
            var _closure2_slot36 = report;
            var _closure2_slot37 = report;
            zuuluu = _closure1_slot17;
            sizing = zuuluu.bind(report)();
            tangon = _closure1_slot4;
            zuuluu = tangon.useRef;
            variable37 = null;
            variable48 = zuuluu.bind(tangon)(variable37);
            _closure2_slot2 = variable48;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            variable51 = 11;
            zuuluu = oscard[variable51];
            option = tangon.bind(report)(zuuluu);
            zuuluu = option.useVideoQuestModalContext;
            zuuluu = zuuluu.bind(option)();
            vacuum = zuuluu.quest;
            _closure2_slot3 = vacuum;
            foxtra = zuuluu.videoSessionId;
            zuuluu = 12;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useQuestTaskDetails;
            variable46 = zuuluu.bind(tangon)(vacuum);
            _closure2_slot4 = variable46;
            tangon = vacuum.userStatus;
            oscard = variable37 == tangon;
            zuuluu = undefined;
            if(oscard) { _fun00004_ip = 337; continue _fun00003 }
 331:
            zuuluu = tangon.completedAt;
 337:
            variable49 = variable37 != zuuluu;
            _closure2_slot5 = variable49;
            verify = _closure1_slot4;
            oscard = verify.useMemo;
            tangon = new Array(1);
            tangon[0] = vacuum;
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
            option = oscard.bind(verify)(zuuluu, tangon);
            _closure2_slot6 = option;
            oscard = verify.useMemo;
            tangon = new Array(1);
            tangon[0] = vacuum;
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
            papara = oscard.bind(verify)(zuuluu, tangon);
            _closure2_slot7 = papara;
            tangon = variable37 == papara;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 423; continue _fun00003 }
 418:
            zuuluu = papara.url;
 423:
            if(!(variable37 == zuuluu)) { _fun00004_ip = 461; continue _fun00003 }
 427:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            yankee = zuuluu.VIDEO_PLAYER_VIDEO;
            _fun00004_ip = 493; continue _fun00003;
 461:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            yankee = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
 493:
            verify = _closure1_slot4;
            tangon = verify.useState;
            zuuluu = variable46.targetSeconds;
            zuuluu = tangon.bind(verify)(zuuluu);
            oscard = _closure1_slot3;
            romeon = 2;
            tangon = oscard.bind(report)(zuuluu, romeon);
            sequen = 0;
            variable41 = tangon[sequen];
            _closure2_slot8 = variable41;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            _closure2_slot9 = tangon;
            output = _closure1_slot9;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.setVideoProgress;
                return entity;
            };
            variable43 = output.bind(report)(tangon);
            _closure2_slot10 = variable43;
            offset = _closure1_slot0;
            result = _closure1_slot2;
            tangon = 14;
            tangon = result[tangon];
            tangon = offset.bind(report)(tangon);
            offset = tangon.shallow;
            tangon = function(argFoo) {
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
            ctrled = output.bind(report)(tangon, offset);
            _closure2_slot11 = ctrled;
            offset = verify.useState;
            tangon = _closure1_slot18;
            tangon = tangon.LOADING;
            tangon = offset.bind(verify)(tangon);
            tangon = oscard.bind(report)(tangon, romeon);
            equals = tangon[sequen];
            _closure2_slot12 = equals;
            tangon = tangon[zuuluu];
            _closure2_slot13 = tangon;
            tangon = verify.useState;
            offset = false;
            tangon = tangon.bind(verify)(offset);
            tangon = oscard.bind(report)(tangon, romeon);
            update = tangon[sequen];
            _closure2_slot14 = update;
            tangon = tangon[zuuluu];
            _closure2_slot15 = tangon;
            whisks = update;
            if(!whisks) { _fun00004_ip = 706; continue _fun00003 }
 692:
            tangon = _closure1_slot18;
            tangon = tangon.ENDED;
            whisks = equals === tangon;
 706:
            if(!whisks) { _fun00004_ip = 730; continue _fun00003 }
 709:
            verify = _closure1_slot15;
            oscard = ctrled.timestampSec;
            tangon = ctrled.duration;
            whisks = verify.bind(report)(oscard, tangon);
 730:
            _closure2_slot16 = whisks;
            cntext = _closure1_slot0;
            verify = _closure1_slot2;
            result = 15;
            tangon = verify[result];
            oscard = cntext.bind(report)(tangon);
            tangon = oscard.useSharedValue;
            variable47 = tangon.bind(oscard)(offset);
            _closure2_slot17 = variable47;
            tangon = verify[result];
            output = cntext.bind(report)(tangon);
            oscard = output.useAnimatedStyle;
            tangon = function() { // Original name: B
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
            echoed = {};
            echoed['hasLoaded'] = update;
            echoed['showControls'] = variable47;
            echoed['playerState'] = equals;
            source = _closure1_slot18;
            echoed['PlayerState'] = source;
            echoed['isVideoEnded'] = whisks;
            echoed['externallyPaused'] = michal;
            update = 16;
            update = verify[update];
            update = cntext.bind(report)(update);
            update = update.withSpring;
            echoed['withSpring'] = update;
            update = 17;
            update = verify[update];
            update = cntext.bind(report)(update);
            update = update.SUBTLE_SPRING;
            echoed['SUBTLE_SPRING'] = update;
            tangon['__closure'] = echoed;
            echoed = 4466097445215.0;
            tangon['__workletHash'] = echoed;
            echoed = _closure1_slot19;
            tangon['__initData'] = echoed;
            update = oscard.bind(output)(tangon);
            tangon = verify[result];
            oscard = cntext.bind(report)(tangon);
            tangon = oscard.useSharedValue;
            variable50 = tangon.bind(oscard)(sequen);
            _closure2_slot18 = variable50;
            tangon = verify[result];
            output = cntext.bind(report)(tangon);
            oscard = output.useAnimatedStyle;
            tangon = function() { // Original name: G
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
            echoed = {};
            config = 18;
            config = verify[config];
            config = cntext.bind(report)(config);
            config = config.withTiming;
            echoed['withTiming'] = config;
            echoed['progress'] = variable50;
            config = 19;
            config = verify[config];
            config = cntext.bind(report)(config);
            config = config.timingFast;
            echoed['timingFast'] = config;
            tangon['__closure'] = echoed;
            echoed = 13895400048400.0;
            tangon['__workletHash'] = echoed;
            echoed = _closure1_slot20;
            tangon['__initData'] = echoed;
            output = oscard.bind(output)(tangon);
            variable44 = _closure1_slot4;
            oscard = variable44.useRef;
            tangon = -1;
            tangon = oscard.bind(variable44)(tangon);
            _closure2_slot19 = tangon;
            echoed = variable44.useCallback;
            oscard = new Array(1);
            oscard[0] = variable47;
            tangon = function(argFoo) {
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
            variable40 = echoed.bind(variable44)(tangon, oscard);
            limora = _closure1_slot1;
            tangon = 20;
            tangon = verify[tangon];
            oscard = limora.bind(report)(tangon);
            tangon = {};
            tangon['duration'] = variable41;
            tangon['isQuestCompleted'] = variable49;
            tangon['playerState'] = equals;
            echoed = vacuum.id;
            tangon['questId'] = echoed;
            tangon['videoSessionId'] = foxtra;
            tangon['videoAssetId'] = yankee;
            yankee = oscard.bind(report)(tangon);
            oscard = yankee.handleBufferAnalytics;
            _closure2_slot20 = oscard;
            echoed = yankee.handleEndAnalytics;
            _closure2_slot21 = echoed;
            tangon = yankee.handleErrorAnalytics;
            _closure2_slot22 = tangon;
            variable52 = yankee.handleLoadAnalytics;
            _closure2_slot23 = variable52;
            foxtra = yankee.handleLoadStartAnalytics;
            _closure2_slot24 = foxtra;
            variable42 = yankee.handlePausePlaybackAnalytics;
            _closure2_slot25 = variable42;
            sierra = yankee.handleProgressAnalytics;
            _closure2_slot26 = sierra;
            target = yankee.handleReadyForDisplayAnalytics;
            _closure2_slot27 = target;
            config = yankee.handleResumePlaybackAnalytics;
            _closure2_slot28 = config;
            cntext = yankee.handleSeekAnalytics;
            _closure2_slot29 = cntext;
            yankee = variable44.useState;
            quebec = yankee.bind(variable44)(offset);
            yankee = _closure1_slot3;
            quebec = yankee.bind(report)(quebec, romeon);
            yankee = quebec[sequen];
            quebec = quebec[zuuluu];
            _closure2_slot30 = quebec;
            variable45 = variable44.useCallback;
            quebec = new Array(1);
            quebec[0] = target;
            target = function() {
                zuuluu = _closure2_slot27;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                zuuluu = _closure2_slot30;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            target = variable45.bind(variable44)(target, quebec);
            variable45 = variable44.useCallback;
            quebec = new Array(4);
            quebec[0] = variable49;
            variable53 = ctrled.timestampSec;
            quebec[1] = variable53;
            quebec[2] = variable52;
            quebec[3] = record;
            record = function(argFoo) {
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
                    tangon = _closure2_slot23;
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
            variable45 = variable45.bind(variable44)(record, quebec);
            quebec = variable44.useCallback;
            record = new Array(4);
            record[0] = equals;
            record[1] = variable42;
            record[2] = config;
            record[3] = whisks;
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
                    tangon = _closure2_slot25;
                    tangon = tangon.bind(entity)();
                    _fun00014_ip = 227; continue _fun00013;
 143:
                    report = _closure2_slot13;
                    tangon = _closure1_slot18;
                    tangon = tangon.PLAYING;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot28;
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
                    michal = _closure2_slot28;
                    michal = michal.bind(entity)();
 227:
                    return entity;
                }
            };
            variable42 = quebec.bind(variable44)(config, record);
            _closure2_slot31 = variable42;
            quebec = variable44.useCallback;
            record = new Array(1);
            record[0] = variable42;
            config = function() {
                michal = _closure2_slot31;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            quebec = quebec.bind(variable44)(config, record);
            variable52 = variable44.useCallback;
            record = function() {
                entity = undefined;
                return entity;
            };
            config = new Array(0);
            config = variable52.bind(variable44)(record, config);
            record = variable44.useContext;
            verify = verify[variable51];
            verify = limora.bind(report)(verify);
            verify = record.bind(variable44)(verify);
            verify = verify.isModalPanGestureActive;
            _closure2_slot32 = verify;
            limora = variable44.useCallback;
            record = new Array(3);
            record[0] = variable47;
            record[1] = variable42;
            record[2] = verify;
            verify = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot32;
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
                    zuuluu = _closure2_slot31;
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
            verify = limora.bind(variable44)(verify, record);
            variable42 = variable44.useCallback;
            limora = new Array(3);
            limora[0] = variable41;
            limora[1] = variable50;
            record = ctrled.maxTimestampSec;
            limora[2] = record;
            record = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 170; continue _fun00017 }
 21:
                    michal = global;
                    report = michal.Math;
                    tangon = report.max;
                    golfie = michal.Math;
                    oscard = golfie.min;
                    michal = _closure2_slot11;
                    zuuluu = michal.maxTimestampSec;
                    michal = argFoo;
                    zuuluu = oscard.bind(golfie)(michal, zuuluu);
                    michal = 0;
                    zuuluu = tangon.bind(report)(michal, zuuluu);
                    tangon = _closure2_slot18;
                    michal = tangon.get;
                    tangon = michal.bind(tangon)();
                    michal = _closure2_slot8;
                    report = tangon * michal;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 21;
                    tangon = tangon[michal];
                    michal = undefined;
                    tangon = oscard.bind(michal)(tangon);
                    michal = tangon.isAndroid;
                    michal = michal.bind(tangon)();
                    if(!michal) { _fun00018_ip = 150; continue _fun00017 }
 130:
                    michal = _closure2_slot2;
                    tangon = michal.current;
                    michal = tangon.seek;
                    michal = michal.bind(tangon)(report);
 150:
                    entity = _closure2_slot2;
                    michal = entity.current;
                    entity = michal.seek;
                    entity = entity.bind(michal)(zuuluu);
 170:
                    entity = undefined;
                    return entity;
                }
            };
            record = variable42.bind(variable44)(record, limora);
            _closure2_slot33 = record;
            variable42 = variable44.useCallback;
            limora = new Array(5);
            limora[0] = variable41;
            limora[1] = variable50;
            limora[2] = cntext;
            cntext = vacuum.id;
            limora[3] = cntext;
            limora[4] = variable43;
            cntext = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = argFoo;
                    zuuluu = _closure2_slot2;
                    tangon = zuuluu.current;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00020_ip = 101; continue _fun00019 }
 21:
                    tangon = _closure2_slot8;
                    zuuluu = 0;
                    if(!(tangon > zuuluu)) { _fun00020_ip = 91; continue _fun00019 }
 31:
                    report = _closure2_slot18;
                    tangon = report.set;
                    oscard = michal.currentTime;
                    zuuluu = _closure2_slot8;
                    zuuluu = oscard / zuuluu;
                    zuuluu = tangon.bind(report)(zuuluu);
                    oscard = _closure2_slot10;
                    zuuluu = _closure2_slot3;
                    report = zuuluu.id;
                    tangon = michal.currentTime;
                    zuuluu = _closure2_slot8;
                    michal = undefined;
                    michal = oscard.bind(michal)(report, tangon, zuuluu);
 91:
                    michal = _closure2_slot29;
                    entity = undefined;
                    entity = michal.bind(entity)();
 101:
                    entity = undefined;
                    return entity;
                }
            };
            variable44 = variable42.bind(variable44)(cntext, limora);
            source = source.ERRORED;
            limora = equals === source;
            if(limora) { _fun00004_ip = 1642; continue _fun00003 }
 1609:
            variable47 = _closure1_slot16;
            variable57 = ctrled.timestampSec;
            variable56 = ctrled.maxTimestampSec;
            variable55 = ctrled.duration;
            variable58 = undefined;
            variable54 = variable49;
            source = variable58[variable47](variable57, variable56, variable55, variable54, variable53);
            limora = !source;
 1642:
            _closure2_slot34 = limora;
            source = _closure1_slot4;
            variable47 = source.useCallback;
            variable42 = new Array(4);
            variable42[0] = record;
            variable42[1] = variable41;
            variable42[2] = variable50;
            variable42[3] = limora;
            cntext = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot34;
                    if(michal) { _fun00022_ip = 49; continue _fun00021 }
 10:
                    zuuluu = _closure2_slot18;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot8;
                    michal = zuuluu * michal;
                    zuuluu = _closure2_slot33;
                    entity = 10;
                    michal = michal + entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 49:
                    entity = undefined;
                    return entity;
                }
            };
            cntext = variable47.bind(source)(cntext, variable42);
            variable47 = source.useCallback;
            variable42 = new Array(4);
            variable42[0] = record;
            variable42[1] = variable41;
            variable42[2] = variable50;
            variable42[3] = equals;
            record = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = _closure2_slot18;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = _closure2_slot8;
                    michal = michal * entity;
                    tangon = _closure2_slot33;
                    entity = 10;
                    michal = michal - entity;
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    report = _closure2_slot12;
                    tangon = _closure1_slot18;
                    tangon = tangon.ENDED;
                    if(!(report === tangon)) { _fun00024_ip = 82; continue _fun00023 }
 63:
                    zuuluu = _closure2_slot13;
                    michal = _closure1_slot18;
                    michal = michal.PLAYING;
                    michal = zuuluu.bind(entity)(michal);
 82:
                    return entity;
                }
            };
            record = variable47.bind(source)(record, variable42);
            record = variable40.bind(report)(record);
            cntext = variable40.bind(report)(cntext);
            variable40 = source.useRef;
            variable49 = variable40.bind(source)(sequen);
            _closure2_slot35 = variable49;
            variable40 = source.useRef;
            variable47 = variable40.bind(source)(sequen);
            _closure2_slot36 = variable47;
            variable42 = source.useCallback;
            variable40 = new Array(7);
            variable40[0] = variable50;
            variable40[1] = vacuum;
            variable40[2] = variable49;
            variable40[3] = variable47;
            variable46 = variable46.taskType;
            variable40[4] = variable46;
            variable40[5] = variable43;
            variable40[6] = sierra;
            sierra = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    michal = entity.seekableDuration;
                    tangon = 0;
                    if(!(tangon !== michal)) { _fun00026_ip = 31; continue _fun00025 }
 15:
                    zuuluu = entity.currentTime;
                    michal = entity.seekableDuration;
                    tangon = zuuluu / michal;
 31:
                    report = entity.currentTime;
                    zuuluu = _closure2_slot35;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00026_ip = 178; continue _fun00025 }
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
                    oscard = _closure2_slot26;
                    report = entity.seekableDuration;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                    report = _closure2_slot35;
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
                    zuuluu = _closure2_slot36;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00026_ip = 283; continue _fun00025 }
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
                    report = _closure2_slot36;
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
            variable43 = variable42.bind(source)(sierra, variable40);
            variable40 = source.useCallback;
            sierra = new Array(3);
            sierra[0] = variable41;
            sierra[1] = vacuum;
            sierra[2] = echoed;
            echoed = function() {
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
                tangon = _closure2_slot21;
                tangon = tangon.bind(entity)();
                zuuluu = _closure2_slot13;
                michal = _closure1_slot18;
                michal = michal.ENDED;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            variable41 = variable40.bind(source)(echoed, sierra);
            sierra = source.useCallback;
            echoed = new Array(1);
            echoed[0] = foxtra;
            foxtra = function() {
                tangon = _closure2_slot13;
                entity = _closure1_slot18;
                zuuluu = entity.LOADING;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot24;
                michal = michal.bind(entity)();
                return entity;
            };
            variable42 = sierra.bind(source)(foxtra, echoed);
            echoed = source.useCallback;
            foxtra = new Array(1);
            foxtra[0] = tangon;
            tangon = function(argFoo) {
                tangon = _closure2_slot13;
                entity = _closure1_slot18;
                zuuluu = entity.ERRORED;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot22;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            variable40 = echoed.bind(source)(tangon, foxtra);
            foxtra = _closure1_slot0;
            echoed = _closure1_slot2;
            tangon = 24;
            tangon = echoed[tangon];
            sierra = foxtra.bind(report)(tangon);
            echoed = sierra.useStateFromStores;
            tangon = _closure1_slot8;
            foxtra = new Array(1);
            foxtra[0] = tangon;
            tangon = function() {
                michal = _closure1_slot8;
                entity = michal.getState;
                entity = entity.bind(michal)();
                return entity;
            };
            foxtra = echoed.bind(sierra)(foxtra, tangon);
            tangon = _closure1_slot10;
            tangon = tangon.ACTIVE;
            tangon = foxtra === tangon;
            echoed = source.useMemo;
            foxtra = new Array(2);
            foxtra[0] = papara;
            foxtra[1] = option;
            option = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot6;
                    report = null;
                    michal = report == entity;
                    entity = null;
                    if(michal) { _fun00028_ip = 63; continue _fun00027 }
 18:
                    michal = {};
                    zuuluu = _closure2_slot7;
                    oscard = report == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00028_ip = 42; continue _fun00027 }
 33:
                    oscard = _closure2_slot7;
                    zuuluu = oscard.url;
 42:
                    if(!(report == zuuluu)) { _fun00028_ip = 55; continue _fun00027 }
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
            variable47 = echoed.bind(source)(option, foxtra);
            echoed = source.useLayoutEffect;
            foxtra = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 21;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00030_ip = 41; continue _fun00029 }
 39:
                    return michal;
 41:
                    michal = _closure2_slot2;
                    michal = michal.current;
                    var _closure3_slot0 = michal;
                    entity = function() {
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            michal = _closure3_slot0;
                            report = null;
                            michal = report == michal;
                            if(michal) { _fun00032_ip = 30; continue _fun00031 }
 16:
                            zuuluu = _closure3_slot0;
                            zuuluu = zuuluu.setNativeProps;
                            michal = report == zuuluu;
 30:
                            if(michal) { _fun00032_ip = 69; continue _fun00031 }
 33:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.setNativeProps;
                            entity = {};
                            tangon = true;
                            entity['paused'] = tangon;
                            tangon = {};
                            tangon['uri'] = report;
                            entity['src'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 69:
                            entity = undefined;
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            option = new Array(0);
            option = echoed.bind(source)(foxtra, option);
            sierra = !tangon;
            if(!tangon) { _fun00004_ip = 2043; continue _fun00003 }
 2029:
            tangon = _closure1_slot18;
            tangon = tangon.PAUSED;
            sierra = equals === tangon;
 2043:
            if(sierra) { _fun00004_ip = 2060; continue _fun00003 }
 2046:
            tangon = _closure1_slot18;
            tangon = tangon.LOADING;
            sierra = equals === tangon;
 2060:
            if(sierra) { _fun00004_ip = 2066; continue _fun00003 }
 2063:
            sierra = michal;
 2066:
            tangon = _closure1_slot4;
            michal = tangon.useState;
            option = michal.bind(tangon)(offset);
            michal = _closure1_slot3;
            michal = michal.bind(report)(option, romeon);
            romeon = michal[sequen];
            michal = michal[zuuluu];
            _closure2_slot37 = michal;
            zuuluu = tangon.useCallback;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function(argFoo) {
                michal = argFoo;
                tangon = _closure2_slot20;
                entity = undefined;
                tangon = tangon.bind(entity)(michal);
                zuuluu = _closure2_slot37;
                michal = michal.isBuffering;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            variable46 = zuuluu.bind(tangon)(entity, michal);
            michal = variable37 == variable47;
            entity = null;
            if(michal) { _fun00004_ip = 4088; continue _fun00003 }
 2140:
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
            foxtra = sizing.videoContainer;
            oscard['style'] = foxtra;
            oscard['onPress'] = verify;
            source = _closure1_slot0;
            verify = _closure1_slot2;
            papara = 25;
            foxtra = verify[papara];
            foxtra = source.bind(report)(foxtra);
            echoed = foxtra.intl;
            foxtra = echoed.string;
            verify = verify[papara];
            verify = source.bind(report)(verify);
            verify = verify.t;
            verify = verify.FlNoSU;
            verify = foxtra.bind(echoed)(verify);
            oscard['accessibilityLabel'] = verify;
            verify = _closure1_slot18;
            verify = verify.ERRORED;
            foxtra = equals !== verify;
            if(!foxtra) { _fun00004_ip = 2378; continue _fun00003 }
 2276:
            source = _closure1_slot11;
            echoed = _closure1_slot13;
            verify = {'mixWithOthers': 'mix', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            verify['ref'] = variable48;
            variable48 = sizing.video;
            verify['style'] = variable48;
            verify['paused'] = sierra;
            verify['source'] = variable47;
            verify['onBuffer'] = variable46;
            verify['onLoad'] = variable45;
            verify['onSeek'] = variable44;
            verify['onProgress'] = variable43;
            verify['onLoadStart'] = variable42;
            verify['onEnd'] = variable41;
            verify['onError'] = variable40;
            verify['onReadyForDisplay'] = target;
            target = 'contain';
            verify['resizeMode'] = target;
            foxtra = source.bind(report)(echoed, verify);
 2378:
            verify = new Array(6);
            verify[0] = foxtra;
            source = _closure1_slot11;
            echoed = _closure1_slot0;
            target = _closure1_slot2;
            foxtra = 26;
            foxtra = target[foxtra];
            foxtra = echoed.bind(report)(foxtra);
            echoed = foxtra.VideoQuestCaptions;
            foxtra = {};
            foxtra['quest'] = vacuum;
            ctrled = ctrled.timestampSec;
            foxtra['currentTime'] = ctrled;
            foxtra['visible'] = variable39;
            ctrled = {};
            vacuum = variable37 == variable38;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2455; continue _fun00003 }
 2450:
            target = variable38.top;
 2455:
            variable40 = variable37 != target;
            vacuum = 0;
            if(!variable40) { _fun00004_ip = 2467; continue _fun00003 }
 2464:
            vacuum = target;
 2467:
            ctrled['top'] = vacuum;
            vacuum = variable37 == variable38;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2485; continue _fun00003 }
 2480:
            target = variable38.bottom;
 2485:
            variable40 = variable37 != target;
            vacuum = 0;
            if(!variable40) { _fun00004_ip = 2497; continue _fun00003 }
 2494:
            vacuum = target;
 2497:
            ctrled['bottom'] = vacuum;
            vacuum = variable37 == variable38;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2515; continue _fun00003 }
 2510:
            target = variable38.left;
 2515:
            variable40 = variable37 != target;
            vacuum = 0;
            if(!variable40) { _fun00004_ip = 2527; continue _fun00003 }
 2524:
            vacuum = target;
 2527:
            ctrled['left'] = vacuum;
            vacuum = variable37 == variable38;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2545; continue _fun00003 }
 2540:
            target = variable38.right;
 2545:
            variable40 = variable37 != target;
            vacuum = 0;
            if(!variable40) { _fun00004_ip = 2557; continue _fun00003 }
 2554:
            vacuum = target;
 2557:
            ctrled['right'] = vacuum;
            foxtra['style'] = ctrled;
            foxtra = source.bind(report)(echoed, foxtra);
            verify[1] = foxtra;
            if(!romeon) { _fun00004_ip = 2723; continue _fun00003 }
 2581:
            source = _closure1_slot11;
            echoed = _closure1_slot7;
            foxtra = {};
            ctrled = true;
            foxtra['animating'] = ctrled;
            vacuum = sizing.bufferingSpinner;
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            vacuum = {};
            target = variable37 == variable38;
            variable40 = undefined;
            if(target) { _fun00004_ip = 2628; continue _fun00003 }
 2623:
            variable40 = variable38.top;
 2628:
            variable41 = variable37 != variable40;
            target = 0;
            if(!variable41) { _fun00004_ip = 2640; continue _fun00003 }
 2637:
            target = variable40;
 2640:
            vacuum['top'] = target;
            variable40 = variable37 == variable38;
            target = undefined;
            if(variable40) { _fun00004_ip = 2658; continue _fun00003 }
 2653:
            target = variable38.left;
 2658:
            variable37 = variable37 != target;
            sequen = 0;
            if(!variable37) { _fun00004_ip = 2670; continue _fun00003 }
 2667:
            sequen = target;
 2670:
            vacuum['left'] = sequen;
            ctrled[1] = vacuum;
            foxtra['style'] = ctrled;
            vacuum = _closure1_slot1;
            sequen = _closure1_slot2;
            ctrled = 9;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(report)(ctrled);
            ctrled = ctrled.unsafe_rawColors;
            ctrled = ctrled.WHITE_500;
            foxtra['color'] = ctrled;
            romeon = source.bind(report)(echoed, foxtra);
 2723:
            verify[2] = romeon;
            yankee = !yankee;
            if(!yankee) { _fun00004_ip = 2782; continue _fun00003 }
 2733:
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
 2782:
            verify[3] = yankee;
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
            if(!offset) { _fun00004_ip = 3194; continue _fun00003 }
 2858:
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
            if(variable39) { _fun00004_ip = 3006; continue _fun00003 }
 2993:
            variable39 = sizing.iconDisabled;
            variable39 = variable39.color;
            _fun00004_ip = 3016; continue _fun00003;
 3006:
            variable40 = sizing.icon;
            variable39 = variable40.color;
 3016:
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
 3194:
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
            if(whisks) { _fun00004_ip = 3567; continue _fun00003 }
 3482:
            whisks = _closure1_slot18;
            whisks = whisks.ERRORED;
            if(!(equals !== whisks)) { _fun00004_ip = 3567; continue _fun00003 }
 3496:
            equals = _closure1_slot11;
            quebec = _closure1_slot0;
            variable36 = _closure1_slot2;
            if(sierra) { _fun00004_ip = 3531; continue _fun00003 }
 3511:
            sierra = 34;
            sierra = variable36[sierra];
            sierra = quebec.bind(report)(sierra);
            whisks = sierra.PauseIcon;
            _fun00004_ip = 3549; continue _fun00003;
 3531:
            sierra = 33;
            sierra = variable36[sierra];
            sierra = quebec.bind(report)(sierra);
            whisks = sierra.PlayIcon;
 3549:
            sierra = {};
            quebec = 'lg';
            sierra['size'] = quebec;
            sierra = equals.bind(report)(whisks, sierra);
            _fun00004_ip = 3613; continue _fun00003;
 3567:
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
 3613:
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
            if(!offset) { _fun00004_ip = 3961; continue _fun00003 }
 3809:
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
 3961:
            kiloes[2] = echoed;
            yankee['children'] = kiloes;
            yankee = foxtra.bind(report)(romeon, yankee);
            verify[4] = yankee;
            if(!offset) { _fun00004_ip = 4064; continue _fun00003 }
 3982:
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
 4064:
            verify[5] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 4088:
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