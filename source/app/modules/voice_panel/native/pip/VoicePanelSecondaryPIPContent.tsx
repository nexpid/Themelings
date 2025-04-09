// app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    offset = 1;
    tangon = oscard[offset];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityLayoutMode;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityPanelModes;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['flex'] = offset;
    tangon['activityContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,pipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:pipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}";
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: VoicePanelSecondaryPIPContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            sizing = _closure1_slot3;
            zuuluu = sizing.useContext;
            output = _closure1_slot1;
            result = _closure1_slot2;
            entity = 7;
            entity = result[entity];
            report = undefined;
            entity = output.bind(report)(entity);
            entity = zuuluu.bind(sizing)(entity);
            foxtra = entity.windowDimensions;
            var _closure2_slot0 = foxtra;
            verify = _closure1_slot0;
            entity = 8;
            entity = result[entity];
            zuuluu = verify.bind(report)(entity);
            entity = zuuluu.usePIPState;
            kiloes = entity.bind(zuuluu)();
            var _closure2_slot1 = kiloes;
            entity = _closure1_slot9;
            option = entity.bind(report)();
            tangon = 9;
            entity = result[tangon];
            golfie = verify.bind(report)(entity);
            oscard = golfie.useStateFromStoresObject;
            entity = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    entity = zuuluu.getConnectedActivityLocation;
                    verify = entity.bind(zuuluu)();
                    entity = zuuluu.getSelfEmbeddedActivityForLocation;
                    report = entity.bind(zuuluu)(verify);
                    tangon = null;
                    entity = tangon == report;
                    zuuluu = undefined;
                    oscard = undefined;
                    if(entity) { _fun00004_ip = 46; continue _fun00003 }
 41:
                    oscard = report.applicationId;
 46:
                    entity = {};
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    golfie = 10;
                    golfie = offset[golfie];
                    option = option.bind(zuuluu)(golfie);
                    golfie = option.getEmbeddedActivityLocationChannelId;
                    golfie = golfie.bind(option)(verify);
                    entity['connectedEmbeddedActivityChannelId'] = golfie;
                    entity['connectedEmbeddedActivity'] = report;
                    tangon = tangon == oscard;
                    zuuluu = undefined;
                    if(tangon) { _fun00004_ip = 113; continue _fun00003 }
 98:
                    report = _closure1_slot4;
                    tangon = report.getPipOrientationLockStateForApp;
                    zuuluu = tangon.bind(report)(oscard);
 113:
                    entity['pipOrientationLockState'] = zuuluu;
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getActivityPanelMode;
                    michal = michal.bind(zuuluu)();
                    entity['panelMode'] = michal;
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(zuuluu, entity);
            golfie = zuuluu.connectedEmbeddedActivityChannelId;
            var _closure2_slot2 = golfie;
            entity = zuuluu.connectedEmbeddedActivity;
            backup = zuuluu.pipOrientationLockState;
            var _closure2_slot3 = backup;
            zuuluu = zuuluu.panelMode;
            tangon = result[tangon];
            romeon = verify.bind(report)(tangon);
            yankee = romeon.useStateFromStores;
            tangon = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = yankee.bind(romeon)(oscard, tangon);
            echoed = kiloes.width;
            var _closure2_slot4 = echoed;
            tangon = kiloes.height;
            var _closure2_slot5 = tangon;
            romeon = sizing.useMemo;
            oscard = new Array(2);
            oscard[0] = echoed;
            oscard[1] = tangon;
            tangon = function() {
                entity = {'width': null, 'height': null, 'position': 'absolute', 'left': '50%', 'marginLeft': null, 'top': '50%'};
                zuuluu = _closure2_slot4;
                entity['width'] = zuuluu;
                oscard = _closure2_slot5;
                entity['height'] = oscard;
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                tangon = 11;
                michal = option[tangon];
                report = undefined;
                verify = golfie.bind(report)(michal);
                michal = 2;
                zuuluu = zuuluu / michal;
                verify = verify.bind(report)(zuuluu);
                zuuluu = -1;
                verify = zuuluu * verify;
                entity['marginLeft'] = verify;
                tangon = option[tangon];
                tangon = golfie.bind(report)(tangon);
                michal = oscard / michal;
                michal = tangon.bind(report)(michal);
                michal = zuuluu * michal;
                entity['marginTop'] = michal;
                return entity;
            };
            oscard = romeon.bind(sizing)(tangon, oscard);
            tangon = 12;
            tangon = result[tangon];
            verify = verify.bind(report)(tangon);
            tangon = verify.useAnimatedStyle;
            michal = function() { // Original name: u
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 13;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    report = _closure2_slot1;
                    oscard = report.width;
                    entity['pipWidth'] = oscard;
                    report = report.height;
                    entity['pipHeight'] = report;
                    report = _closure2_slot3;
                    entity['pipOrientationLockState'] = report;
                    report = _closure2_slot0;
                    tangon = report.get;
                    tangon = tangon.bind(report)();
                    tangon = tangon.landscape;
                    entity['isLandscape'] = tangon;
                    michal = michal.bind(zuuluu)(entity);
                    report = michal.width;
                    zuuluu = michal.height;
                    tangon = michal.shouldVerticallyCenter;
                    entity = {};
                    entity['width'] = report;
                    entity['height'] = zuuluu;
                    oscard = michal.shouldHorizontallyCenter;
                    zuuluu = '0%';
                    report = zuuluu;
                    if(!oscard) { _fun00006_ip = 142; continue _fun00005 }
 136:
                    report = '50%';
 142:
                    entity['left'] = report;
                    if(!tangon) { _fun00006_ip = 155; continue _fun00005 }
 149:
                    zuuluu = '50%';
 155:
                    entity['top'] = zuuluu;
                    zuuluu = michal.marginLeft;
                    entity['marginLeft'] = zuuluu;
                    michal = michal.marginTop;
                    entity['marginTop'] = michal;
                    return entity;
                }
            };
            romeon = {};
            sizing = 13;
            sizing = result[sizing];
            sizing = output.bind(report)(sizing);
            romeon['getActivityContainerPipStylesSpec'] = sizing;
            romeon['pipState'] = kiloes;
            romeon['pipOrientationLockState'] = backup;
            romeon['windowDimensions'] = foxtra;
            michal['__closure'] = romeon;
            romeon = 10284606108243.0;
            michal['__workletHash'] = romeon;
            romeon = _closure1_slot10;
            michal['__initData'] = romeon;
            foxtra = tangon.bind(verify)(michal);
            tangon = null;
            michal = tangon == entity;
            entity = null;
            if(michal) { _fun00002_ip = 550; continue _fun00001 }
 364:
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 14;
            michal = romeon[michal];
            michal = verify.bind(report)(michal);
            michal = michal.bind(report)(golfie);
            entity = null;
            if(michal) { _fun00002_ip = 550; continue _fun00001 }
 397:
            michal = _closure1_slot7;
            michal = michal.PIP;
            entity = null;
            if(!(zuuluu === michal)) { _fun00002_ip = 550; continue _fun00001 }
 416:
            tangon = _closure1_slot8;
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 15;
            michal = romeon[michal];
            zuuluu = verify.bind(report)(michal);
            michal = {};
            michal['style'] = oscard;
            oscard = 'none';
            michal['pointerEvents'] = oscard;
            oscard = 16;
            oscard = romeon[oscard];
            golfie = verify.bind(report)(oscard);
            oscard = {};
            backup = option.activityContainer;
            option = new Array(2);
            option[0] = backup;
            option[1] = foxtra;
            oscard['style'] = option;
            option = 17;
            option = romeon[option];
            verify = verify.bind(report)(option);
            option = {};
            option['channel'] = yankee;
            offset = _closure1_slot6;
            offset = offset.PIP;
            option['layoutMode'] = offset;
            option = tangon.bind(report)(verify, option);
            oscard['children'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 550:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();