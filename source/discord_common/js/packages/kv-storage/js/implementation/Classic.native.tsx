// discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        tango = argFoo;
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        golf = global;
        verify = golf.Object;
        options = verify.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, mike);
        entity = 0;
        mike = oscar[entity];
        entity = undefined;
        mike = report.bind(entity)(mike);
        mike = mike.NativeModules;
        verify = tango.__KvStorage;
        options = null;
        if(!(options == verify)) { _fun00002_ip = 289; continue _fun00001 }
 78:
        verify = mike.KvStorage;
        if(!(options != verify)) { _fun00002_ip = 255; continue _fun00001 }
 91:
        verify = mike.KvStorage;
        offset = verify.activate;
        verify = golf.Function;
        verify = offset instanceof verify;
        if(verify) { _fun00002_ip = 150; continue _fun00001 }
 116:
        yankee = golf.Error;
        verify = yankee.prototype;
        offset = Object.create(verify, {constructor: {value: yankee}});
        backup = "couldn't start the storage subsystem: native module exists, but jsi might not be available?";
        kilo = offset;
        verify = new kilo[yankee](backup, foxtrot);
        verify = verify instanceof Object ? verify : offset;
        throw verify;
 150:
        verify = mike.KvStorage;
        mike = verify.activate;
        mike = mike.bind(verify)();
        if(mike) { _fun00002_ip = 203; continue _fun00001 }
 169:
        offset = golf.Error;
        mike = offset.prototype;
        verify = Object.create(mike, {constructor: {value: offset}});
        backup = "couldn't start the storage subsystem: activation failed.";
        kilo = verify;
        mike = new kilo[offset](backup, foxtrot);
        mike = mike instanceof Object ? mike : verify;
        throw mike;
 203:
        mike = tango.__KvStorage;
        if(!(options != mike)) { _fun00002_ip = 221; continue _fun00001 }
 213:
        mike = tango.__KvStorage;
        _fun00002_ip = 295; continue _fun00001;
 221:
        offset = golf.Error;
        options = offset.prototype;
        verify = Object.create(options, {constructor: {value: offset}});
        backup = "couldn't start the storage subsystem: subsystem missing after activation.";
        kilo = verify;
        options = new kilo[offset](backup, foxtrot);
        options = options instanceof Object ? options : verify;
        throw options;
 255:
        verify = golf.Error;
        golf = verify.prototype;
        options = Object.create(golf, {constructor: {value: verify}});
        backup = "couldn't find the native kv_storage module.";
        kilo = options;
        golf = new kilo[verify](backup, foxtrot);
        golf = golf instanceof Object ? golf : options;
        throw golf;
 289:
        mike = tango.__KvStorage;
 295:
        tango = 1;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = '../discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx';
        tango = report.bind(oscar)(tango);
        zulu['KV_RAW'] = mike;
        return entity;
    }
})();