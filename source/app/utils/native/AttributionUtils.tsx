// app/utils/native/AttributionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun109169: for(var _fun109169_ip = 0; ; ) switch(_fun109169_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscar;
        entity = global;
        options = entity.Object;
        golf = options.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, mike);
        entity = 0;
        mike = oscar[entity];
        entity = undefined;
        mike = report.bind(entity)(mike);
        mike = mike.AnalyticEvents;
        var _closure1_slot3 = mike;
        golf = 1;
        mike = oscar[golf];
        options = report.bind(entity)(mike);
        mike = options.isAndroid;
        options = mike.bind(options)();
        mike = 'c5d61fi6aark';
        if(!options) { _fun109169_ip = 116; continue _fun109169 }
 110:
        mike = 'd8fcx8xdmrr4';
 116:
        var _closure1_slot4 = mike;
        mike = {};
        options = oscar[golf];
        verify = report.bind(entity)(options);
        options = verify.isAndroid;
        verify = options.bind(verify)();
        options = 'ymrsnx';
        if(!verify) { _fun109169_ip = 155; continue _fun109169 }
 149:
        options = 'ctt5aq';
 155:
        mike['LOGIN'] = options;
        golf = oscar[golf];
        options = report.bind(entity)(golf);
        golf = options.isAndroid;
        options = golf.bind(options)();
        golf = 'o3436p';
        if(!options) { _fun109169_ip = 193; continue _fun109169 }
 187:
        golf = 'ebn8ke';
 193:
        mike['REGISTER'] = golf;
        var _closure1_slot5 = mike;
        mike = {};
        golf = function() { // Original name: initializeAttribution
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 2;
            oscar = report[mike];
            entity = undefined;
            oscar = zulu.bind(entity)(oscar);
            oscar = oscar.AdjustConfig;
            verify = oscar.EnvironmentProduction;
            oscar = report[mike];
            oscar = zulu.bind(entity)(oscar);
            golf = oscar.AdjustConfig;
            offset = _closure1_slot4;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            yankee = oscar;
            tango = new yankee[golf](offset, verify, options);
            tango = tango instanceof Object ? tango : oscar;
            golf = tango.setAttributionCallbackListener;
            oscar = function(argFoo) {
                _fun109171: for(var _fun109171_ip = 0; ; ) switch(_fun109171_ip) {
 0:
                    report = argFoo;
                    entity = null;
                    if(!(entity != report)) { _fun109171_ip = 165; continue _fun109171 }
 12:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.track;
                    entity = _closure1_slot3;
                    mike = entity.USER_ATTRIBUTION_RECEIVED;
                    entity = {};
                    oscar = report.trackerToken;
                    entity['adjust_tracker_token'] = oscar;
                    oscar = report.trackerName;
                    entity['adjust_tracker_name'] = oscar;
                    oscar = report.adid;
                    entity['adjust_adid'] = oscar;
                    oscar = report.network;
                    entity['attribution_network'] = oscar;
                    oscar = report.campaign;
                    entity['attribution_campaign'] = oscar;
                    oscar = report.adgroup;
                    entity['attribution_adgroup'] = oscar;
                    report = report.creative;
                    entity['attribution_creative'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 165:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = golf.bind(tango)(oscar);
            mike = report[mike];
            mike = zulu.bind(entity)(mike);
            zulu = mike.Adjust;
            mike = zulu.create;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        mike['initializeAttribution'] = golf;
        golf = function() { // Original name: trackLogin
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 2;
            zulu = golf[report];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            tango = zulu.Adjust;
            zulu = tango.trackEvent;
            report = golf[report];
            report = oscar.bind(entity)(report);
            oscar = report.AdjustEvent;
            mike = _closure1_slot5;
            options = mike.LOGIN;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            verify = report;
            mike = new verify[oscar](options, golf);
            mike = mike instanceof Object ? mike : report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike['trackLogin'] = golf;
        golf = function() { // Original name: trackRegister
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 2;
            zulu = golf[report];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            tango = zulu.Adjust;
            zulu = tango.trackEvent;
            report = golf[report];
            report = oscar.bind(entity)(report);
            oscar = report.AdjustEvent;
            mike = _closure1_slot5;
            options = mike.REGISTER;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            verify = report;
            mike = new verify[oscar](options, golf);
            mike = mike instanceof Object ? mike : report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike['trackRegister'] = golf;
        tango = function() { // Original name: componentWillUnmount
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.Adjust;
            mike = zulu.componentWillUnmount;
            mike = mike.bind(zulu)();
            return entity;
        };
        mike['componentWillUnmount'] = tango;
        tango = 4;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'utils/native/AttributionUtils.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();