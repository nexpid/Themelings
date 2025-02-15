// app/utils/ReleaseChannelUtils.native.tsx
export default (function(_, argBar, __, argCorge, ___, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscar = argBar;
        zulu = argFred;
        golf = argPlugh;
        entity = global;
        report = entity.Object;
        tango = report.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = tango.bind(report)(zulu, entity, mike);
        entity = 0;
        tango = golf[entity];
        mike = argCorge;
        entity = undefined;
        tango = mike.bind(entity)(tango);
        mike = tango.getConstants;
        mike = mike.bind(tango)();
        mike = mike.ReleaseChannel;
        tango = 1;
        tango = golf[tango];
        report = oscar.bind(entity)(tango);
        tango = report.isAndroid;
        options = tango.bind(report)();
        if(!options) { _fun00002_ip = 121; continue _fun00001 }
 97:
        report = mike.indexOf;
        tango = 'canary';
        report = report.bind(mike)(tango);
        tango = -1;
        options = tango === report;
 121:
        if(!options) { _fun00002_ip = 148; continue _fun00001 }
 124:
        report = mike.indexOf;
        tango = 'beta';
        report = report.bind(mike)(tango);
        tango = -1;
        options = tango === report;
 148:
        tango = 'stable';
        report = tango === mike;
        verify = mike.indexOf;
        tango = 'debug';
        tango = verify.bind(mike)(tango);
        offset = -1;
        verify = offset !== tango;
        if(verify) { _fun00002_ip = 203; continue _fun00001 }
 183:
        yankee = mike.indexOf;
        tango = 'developer';
        tango = yankee.bind(mike)(tango);
        verify = offset !== tango;
 203:
        tango = !verify;
        if(verify) { _fun00002_ip = 218; continue _fun00001 }
 209:
        if(report) { _fun00002_ip = 215; continue _fun00001 }
 212:
        report = options;
 215:
        tango = report;
 218:
        report = 2;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.fileFinishedImporting;
        report = 'utils/ReleaseChannelUtils.native.tsx';
        report = oscar.bind(golf)(report);
        zulu['isStable'] = tango;
        zulu['CurrentReleaseChannel'] = mike;
        return entity;
    }
})();