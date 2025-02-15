// app/modules/gateway/GatewaySocketSingleton.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun105882: for(var _fun105882_ip = 0; ; ) switch(_fun105882_ip) {
 0:
        golf = argBar;
        offset = argBaz;
        zulu = argFred;
        options = argPlugh;
        var _closure1_slot0 = offset;
        var _closure1_slot1 = options;
        entity = global;
        report = entity.Object;
        tango = report.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = tango.bind(report)(zulu, entity, mike);
        entity = 0;
        mike = options[entity];
        entity = undefined;
        mike = offset.bind(entity)(mike);
        var _closure1_slot2 = mike;
        mike = 1;
        mike = options[mike];
        report = offset.bind(entity)(mike);
        mike = report.prototype;
        tango = Object.create(mike, {constructor: {value: report}});
        sizing = 'ConnectionStore';
        output = tango;
        mike = new output[report](sizing, kilo);
        mike = mike instanceof Object ? mike : tango;
        var _closure1_slot3 = mike;
        mike = 2;
        mike = options[mike];
        mike = offset.bind(entity)(mike);
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        output = tango;
        mike = new output[mike](sizing);
        report = mike instanceof Object ? mike : tango;
        var _closure1_slot4 = report;
        mike = 3;
        mike = options[mike];
        mike = offset.bind(entity)(mike);
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        output = tango;
        sizing = report;
        mike = new output[mike](sizing, kilo);
        tango = mike instanceof Object ? mike : tango;
        var _closure1_slot5 = tango;
        mike = 4;
        mike = options[mike];
        mike = offset.bind(entity)(mike);
        verify = mike.prototype;
        verify = Object.create(verify, {constructor: {value: mike}});
        output = verify;
        sizing = report;
        mike = new output[mike](sizing, kilo);
        mike = mike instanceof Object ? mike : verify;
        verify = function() {
            _fun105883: for(var _fun105883_ip = 0; ; ) switch(_fun105883_ip) {
 0:
                mike = _closure1_slot2;
                entity = mike.getToken;
                tango = entity.bind(mike)();
                golf = _closure1_slot3;
                oscar = golf.verbose;
                report = {};
                entity = null;
                mike = entity != tango;
                report['hasToken'] = mike;
                mike = 'handleIdentify called';
                mike = oscar.bind(golf)(mike, report);
                mike = entity == tango;
                if(mike) { _fun105883_ip = 127; continue _fun105883 }
 61:
                mike = {};
                mike['token'] = tango;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 5;
                report = report[tango];
                tango = undefined;
                report = oscar.bind(tango)(report);
                tango = report.getSuperProperties;
                tango = tango.bind(report)();
                mike['properties'] = tango;
                tango = _closure1_slot5;
                zulu = tango.getInitialState;
                zulu = zulu.bind(tango)();
                mike['presence'] = zulu;
                entity = mike;
 127:
                return entity;
            }
        };
        report['handleIdentify'] = verify;
        verify = 6;
        verify = options[verify];
        yankee = golf.bind(entity)(verify);
        verify = yankee.isDesktop;
        verify = verify.bind(yankee)();
        if(!verify) { _fun105882_ip = 302; continue _fun105882 }
 261:
        verify = 7;
        verify = options[verify];
        verify = offset.bind(entity)(verify);
        foxtrot = verify.remotePowerMonitor;
        romeo = foxtrot.on;
        yankee = 'resume';
        verify = function() {
            tango = _closure1_slot4;
            zulu = tango.expeditedHeartbeat;
            mike = 5000;
            entity = 'power monitor resumed';
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        verify = romeo.bind(foxtrot)(yankee, verify);
 302:
        verify = 8;
        yankee = options[verify];
        foxtrot = offset.bind(entity)(yankee);
        romeo = foxtrot.addOfflineCallback;
        yankee = function() {
            report = _closure1_slot4;
            tango = report.networkStateChange;
            zulu = 15000;
            mike = 'network detected offline.';
            entity = false;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        };
        yankee = romeo.bind(foxtrot)(yankee);
        verify = options[verify];
        yankee = offset.bind(entity)(verify);
        offset = yankee.addOnlineCallback;
        verify = function() {
            tango = _closure1_slot4;
            zulu = tango.networkStateChange;
            mike = 5000;
            entity = 'network detected online.';
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        verify = offset.bind(yankee)(verify);
        yankee = report.on;
        offset = 'disconnect';
        verify = function(argFoo) {
            entity = argFoo;
            oscar = entity.code;
            report = entity.reason;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'CONNECTION_CLOSED';
            mike['type'] = golf;
            mike['code'] = oscar;
            mike['reason'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        verify = yankee.bind(report)(offset, verify);
        offset = report.on;
        verify = 'close';
        oscar = function(argFoo) {
            entity = argFoo;
            oscar = entity.code;
            report = entity.reason;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'CONNECTION_INTERRUPTED';
            mike['type'] = golf;
            mike['code'] = oscar;
            mike['reason'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        oscar = offset.bind(report)(verify, oscar);
        oscar = 10;
        oscar = options[oscar];
        options = golf.bind(entity)(oscar);
        golf = options.fileFinishedImporting;
        oscar = 'modules/gateway/GatewaySocketSingleton.tsx';
        oscar = golf.bind(options)(oscar);
        zulu['socket'] = report;
        zulu['localPresenceState'] = tango;
        zulu['localVoiceState'] = mike;
        return entity;
    }
})();