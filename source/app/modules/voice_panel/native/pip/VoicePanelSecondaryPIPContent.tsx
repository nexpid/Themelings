// app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityLayoutMode;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityPanelModes;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    tango['activityContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = {};
    golf = "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,pipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:pipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}";
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: VoicePanelSecondaryPIPContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            sizing = _closure1_slot3;
            zulu = sizing.useContext;
            output = _closure1_slot1;
            result = _closure1_slot2;
            entity = 7;
            entity = result[entity];
            report = undefined;
            entity = output.bind(report)(entity);
            entity = zulu.bind(sizing)(entity);
            foxtrot = entity.windowDimensions;
            var _closure2_slot0 = foxtrot;
            verify = _closure1_slot0;
            entity = 8;
            entity = result[entity];
            zulu = verify.bind(report)(entity);
            entity = zulu.usePIPState;
            kilo = entity.bind(zulu)();
            var _closure2_slot1 = kilo;
            entity = _closure1_slot9;
            options = entity.bind(report)();
            tango = 9;
            entity = result[tango];
            golf = verify.bind(report)(entity);
            oscar = golf.useStateFromStoresObject;
            entity = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot4;
                    entity = zulu.getConnectedActivityChannelId;
                    verify = entity.bind(zulu)();
                    tango = null;
                    report = tango != verify;
                    entity = undefined;
                    if(!report) { _fun00004_ip = 55; continue _fun00003 }
 28:
                    oscar = _closure1_slot4;
                    report = oscar.getSelfEmbeddedActivityForChannel;
                    report = report.bind(oscar)(verify);
                    oscar = tango != report;
                    entity = undefined;
                    if(!oscar) { _fun00004_ip = 55; continue _fun00003 }
 52:
                    entity = report;
 55:
                    report = tango == entity;
                    oscar = undefined;
                    if(report) { _fun00004_ip = 69; continue _fun00003 }
 64:
                    oscar = entity.applicationId;
 69:
                    entity = {};
                    entity['activityChannelId'] = verify;
                    golf = tango != verify;
                    report = undefined;
                    if(!golf) { _fun00004_ip = 112; continue _fun00003 }
 85:
                    options = _closure1_slot4;
                    golf = options.getSelfEmbeddedActivityForChannel;
                    golf = golf.bind(options)(verify);
                    options = tango != golf;
                    report = undefined;
                    if(!options) { _fun00004_ip = 112; continue _fun00003 }
 109:
                    report = golf;
 112:
                    entity['activity'] = report;
                    tango = tango == oscar;
                    zulu = undefined;
                    if(tango) { _fun00004_ip = 141; continue _fun00003 }
 126:
                    report = _closure1_slot4;
                    tango = report.getPipOrientationLockStateForApp;
                    zulu = tango.bind(report)(oscar);
 141:
                    entity['pipOrientationLockState'] = zulu;
                    zulu = _closure1_slot4;
                    mike = zulu.getActivityPanelMode;
                    mike = mike.bind(zulu)();
                    entity['panelMode'] = mike;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu, entity);
            golf = zulu.activityChannelId;
            var _closure2_slot2 = golf;
            entity = zulu.activity;
            backup = zulu.pipOrientationLockState;
            var _closure2_slot3 = backup;
            zulu = zulu.panelMode;
            tango = result[tango];
            romeo = verify.bind(report)(tango);
            yankee = romeo.useStateFromStores;
            tango = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = yankee.bind(romeo)(oscar, tango);
            echo = kilo.width;
            var _closure2_slot4 = echo;
            tango = kilo.height;
            var _closure2_slot5 = tango;
            romeo = sizing.useMemo;
            oscar = new Array(2);
            oscar[0] = echo;
            oscar[1] = tango;
            tango = function() {
                entity = {'width': null, 'height': null, 'position': 'absolute', 'left': '50%', 'marginLeft': null, 'top': '50%'};
                zulu = _closure2_slot4;
                entity['width'] = zulu;
                oscar = _closure2_slot5;
                entity['height'] = oscar;
                golf = _closure1_slot1;
                options = _closure1_slot2;
                tango = 10;
                mike = options[tango];
                report = undefined;
                verify = golf.bind(report)(mike);
                mike = 2;
                zulu = zulu / mike;
                verify = verify.bind(report)(zulu);
                zulu = -1;
                verify = zulu * verify;
                entity['marginLeft'] = verify;
                tango = options[tango];
                tango = golf.bind(report)(tango);
                mike = oscar / mike;
                mike = tango.bind(report)(mike);
                mike = zulu * mike;
                entity['marginTop'] = mike;
                return entity;
            };
            oscar = romeo.bind(sizing)(tango, oscar);
            tango = 11;
            tango = result[tango];
            verify = verify.bind(report)(tango);
            tango = verify.useAnimatedStyle;
            mike = function() { // Original name: u
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 12;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    report = _closure2_slot1;
                    oscar = report.width;
                    entity['pipWidth'] = oscar;
                    report = report.height;
                    entity['pipHeight'] = report;
                    report = _closure2_slot3;
                    entity['pipOrientationLockState'] = report;
                    report = _closure2_slot0;
                    tango = report.get;
                    tango = tango.bind(report)();
                    tango = tango.landscape;
                    entity['isLandscape'] = tango;
                    mike = mike.bind(zulu)(entity);
                    report = mike.width;
                    zulu = mike.height;
                    tango = mike.shouldVerticallyCenter;
                    entity = {};
                    entity['width'] = report;
                    entity['height'] = zulu;
                    oscar = mike.shouldHorizontallyCenter;
                    zulu = '0%';
                    report = zulu;
                    if(!oscar) { _fun00006_ip = 142; continue _fun00005 }
 136:
                    report = '50%';
 142:
                    entity['left'] = report;
                    if(!tango) { _fun00006_ip = 155; continue _fun00005 }
 149:
                    zulu = '50%';
 155:
                    entity['top'] = zulu;
                    zulu = mike.marginLeft;
                    entity['marginLeft'] = zulu;
                    mike = mike.marginTop;
                    entity['marginTop'] = mike;
                    return entity;
                }
            };
            romeo = {};
            sizing = 12;
            sizing = result[sizing];
            sizing = output.bind(report)(sizing);
            romeo['getActivityContainerPipStylesSpec'] = sizing;
            romeo['pipState'] = kilo;
            romeo['pipOrientationLockState'] = backup;
            romeo['windowDimensions'] = foxtrot;
            mike['__closure'] = romeo;
            romeo = 10284606108243.0;
            mike['__workletHash'] = romeo;
            romeo = _closure1_slot10;
            mike['__initData'] = romeo;
            foxtrot = tango.bind(verify)(mike);
            tango = null;
            mike = tango == entity;
            entity = null;
            if(mike) { _fun00002_ip = 574; continue _fun00001 }
 364:
            mike = tango == yankee;
            entity = null;
            if(mike) { _fun00002_ip = 574; continue _fun00001 }
 376:
            mike = tango == golf;
            entity = null;
            if(mike) { _fun00002_ip = 574; continue _fun00001 }
 388:
            verify = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 13;
            mike = romeo[mike];
            mike = verify.bind(report)(mike);
            mike = mike.bind(report)(golf);
            entity = null;
            if(mike) { _fun00002_ip = 574; continue _fun00001 }
 421:
            mike = _closure1_slot7;
            mike = mike.PIP;
            entity = null;
            if(!(zulu === mike)) { _fun00002_ip = 574; continue _fun00001 }
 440:
            tango = _closure1_slot8;
            verify = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 14;
            mike = romeo[mike];
            zulu = verify.bind(report)(mike);
            mike = {};
            mike['style'] = oscar;
            oscar = 'none';
            mike['pointerEvents'] = oscar;
            oscar = 15;
            oscar = romeo[oscar];
            golf = verify.bind(report)(oscar);
            oscar = {};
            backup = options.activityContainer;
            options = new Array(2);
            options[0] = backup;
            options[1] = foxtrot;
            oscar['style'] = options;
            options = 16;
            options = romeo[options];
            verify = verify.bind(report)(options);
            options = {};
            options['channel'] = yankee;
            offset = _closure1_slot6;
            offset = offset.PIP;
            options['layoutMode'] = offset;
            options = tango.bind(report)(verify, options);
            oscar['children'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 574:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();