// app/modules/messages/useAllowedChatOverlays.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.ChatOverlays;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityPanelModes;
    tangon = {};
    option = verify.NEW_MESSAGES;
    offset = new Array(3);
    offset[0] = option;
    option = verify.OPT_IN_CHANNEL;
    offset[1] = option;
    option = verify.SUMMARIES;
    offset[2] = option;
    option = 'no_text_activity';
    tangon[option] = offset;
    offset = golfie.DISCONNECTED;
    yankee = verify.NEW_MESSAGES;
    option = new Array(3);
    option[0] = yankee;
    yankee = verify.OPT_IN_CHANNEL;
    option[1] = yankee;
    yankee = verify.SUMMARIES;
    option[2] = yankee;
    tangon[offset] = option;
    offset = golfie.LAUNCHING_WITH_ORIENTATION_CHANGE;
    yankee = verify.NEW_MESSAGES;
    option = new Array(3);
    option[0] = yankee;
    yankee = verify.OPT_IN_CHANNEL;
    option[1] = yankee;
    yankee = verify.SUMMARIES;
    option[2] = yankee;
    tangon[offset] = option;
    offset = golfie.PANEL;
    option = new Array(0);
    tangon[offset] = option;
    offset = golfie.PIP;
    yankee = verify.NEW_MESSAGES;
    option = new Array(3);
    option[0] = yankee;
    yankee = verify.OPT_IN_CHANNEL;
    option[1] = yankee;
    yankee = verify.SUMMARIES;
    option[2] = yankee;
    tangon[offset] = option;
    option = golfie.ACTIVITY_POPOUT_WINDOW;
    offset = verify.NEW_MESSAGES;
    golfie = new Array(3);
    golfie[0] = offset;
    offset = verify.OPT_IN_CHANNEL;
    golfie[1] = offset;
    verify = verify.SUMMARIES;
    golfie[2] = verify;
    tangon[option] = golfie;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/useAllowedChatOverlays.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useAllowedChatOverlays
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 4;
            entity = golfie[tangon];
            oscard = undefined;
            yankee = report.bind(oscard)(entity);
            verify = yankee.useStateFromStores;
            offset = _closure1_slot3;
            option = new Array(1);
            option[0] = offset;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentEmbeddedActivity;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = verify.bind(yankee)(option, entity);
            tangon = golfie[tangon];
            verify = report.bind(oscard)(tangon);
            option = verify.useStateFromStores;
            tangon = new Array(1);
            tangon[0] = offset;
            zuuluu = function() {
                michal = _closure1_slot3;
                entity = michal.getActivityPanelMode;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = option.bind(verify)(tangon, zuuluu);
            tangon = 5;
            tangon = golfie[tangon];
            golfie = report.bind(oscard)(tangon);
            report = golfie.getEmbeddedActivityLocationChannelId;
            tangon = null;
            option = tangon == entity;
            tangon = undefined;
            if(option) { _fun00002_ip = 126; continue _fun00001 }
 121:
            tangon = entity.location;
 126:
            report = report.bind(golfie)(tangon);
            if(!(oscard !== entity)) { _fun00002_ip = 178; continue _fun00001 }
 135:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            tangon = tangon.bind(oscard)(entity);
            entity = _closure1_slot4;
            entity = tangon.bind(oscard)(report, entity);
            if(entity) { _fun00002_ip = 178; continue _fun00001 }
 168:
            entity = _closure1_slot5;
            entity = entity[zuuluu];
            _fun00002_ip = 190; continue _fun00001;
 178:
            michal = _closure1_slot5;
            entity = michal.no_text_activity;
 190:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();