// discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        tangon = argFoo;
        report = argBar;
        zuuluu = argFre;
        oscard = argPlu;
        golfie = global;
        verify = golfie.Object;
        option = verify.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = option.bind(verify)(zuuluu, entity, michal);
        entity = 0;
        michal = oscard[entity];
        entity = undefined;
        michal = report.bind(entity)(michal);
        michal = michal.NativeModules;
        verify = tangon.__KvStorage;
        option = null;
        if(!(option == verify)) { _fun00002_ip = 289; continue _fun00001 }
 78:
        verify = michal.KvStorage;
        if(!(option != verify)) { _fun00002_ip = 255; continue _fun00001 }
 91:
        verify = michal.KvStorage;
        offset = verify.activate;
        verify = golfie.Function;
        verify = offset instanceof verify;
        if(verify) { _fun00002_ip = 150; continue _fun00001 }
 116:
        yankee = golfie.Error;
        verify = yankee.prototype;
        offset = Object.create(verify, {constructor: {value: yankee}});
        backup = "couldn't start the storage subsystem: native module exists, but jsi might not be available?";
        kiloes = offset;
        verify = new kiloes[yankee](backup, foxtra);
        verify = verify instanceof Object ? verify : offset;
        throw verify;
 150:
        verify = michal.KvStorage;
        michal = verify.activate;
        michal = michal.bind(verify)();
        if(michal) { _fun00002_ip = 203; continue _fun00001 }
 169:
        offset = golfie.Error;
        michal = offset.prototype;
        verify = Object.create(michal, {constructor: {value: offset}});
        backup = "couldn't start the storage subsystem: activation failed.";
        kiloes = verify;
        michal = new kiloes[offset](backup, foxtra);
        michal = michal instanceof Object ? michal : verify;
        throw michal;
 203:
        michal = tangon.__KvStorage;
        if(!(option != michal)) { _fun00002_ip = 221; continue _fun00001 }
 213:
        michal = tangon.__KvStorage;
        _fun00002_ip = 295; continue _fun00001;
 221:
        offset = golfie.Error;
        option = offset.prototype;
        verify = Object.create(option, {constructor: {value: offset}});
        backup = "couldn't start the storage subsystem: subsystem missing after activation.";
        kiloes = verify;
        option = new kiloes[offset](backup, foxtra);
        option = option instanceof Object ? option : verify;
        throw option;
 255:
        verify = golfie.Error;
        golfie = verify.prototype;
        option = Object.create(golfie, {constructor: {value: verify}});
        backup = "couldn't find the native kv_storage module.";
        kiloes = option;
        golfie = new kiloes[verify](backup, foxtra);
        golfie = golfie instanceof Object ? golfie : option;
        throw golfie;
 289:
        michal = tangon.__KvStorage;
 295:
        tangon = 1;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = '../discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['KV_RAW'] = michal;
        return entity;
    }
})();