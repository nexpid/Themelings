// app/modules/app_database/modules/LowDiskTrim.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: LowDiskTrim
            report = this;
            var _closure3_slot0 = report;
            oscard = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = oscard.bind(entity)(report, tangon);
            tangon = false;
            report['isLowDisk'] = tangon;
            tangon = {};
            oscard = function() { // Original name: POST_CONNECTION_OPEN
                michal = _closure3_slot0;
                entity = michal.handlePostConnectionOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon['POST_CONNECTION_OPEN'] = oscard;
            report['actions'] = tangon;
            tangon = _closure1_slot4;
            zuuluu = tangon.addChangeListener;
            michal = function() {
                michal = _closure3_slot0;
                entity = michal.handleFileSystemStoreChanged;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'handlePostConnectionOpen';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            entity = false;
            michal['isLowDisk'] = entity;
            entity = michal.handleFileSystemStoreChanged;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'handleFileSystemStoreChanged';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = this;
                entity = _closure1_slot4;
                entity = entity.isLowDisk;
                tangon = entity;
                if(!tangon) { _fun00002_ip = 32; continue _fun00001 }
 22:
                report = michal.isLowDisk;
                tangon = report !== entity;
 32:
                if(!tangon) { _fun00002_ip = 83; continue _fun00001 }
 35:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 3;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                zuuluu = tangon.database;
                tangon = zuuluu.bind(tangon)();
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00002_ip = 83; continue _fun00001 }
 73:
                zuuluu = tangon.incrementalVacuum;
                zuuluu = zuuluu.bind(tangon)();
 83:
                michal['isLowDisk'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'resetInMemoryState';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/modules/LowDiskTrim.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();