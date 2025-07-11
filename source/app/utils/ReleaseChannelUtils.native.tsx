// app/utils/ReleaseChannelUtils.native.tsx
export default (function(_, argBar, __, argCor, ___, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argBar;
        zuuluu = argFre;
        golfie = argPlu;
        entity = global;
        report = entity.Object;
        tangon = report.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = tangon.bind(report)(zuuluu, entity, michal);
        entity = 0;
        tangon = golfie[entity];
        michal = argCor;
        entity = undefined;
        tangon = michal.bind(entity)(tangon);
        michal = tangon.getConstants;
        michal = michal.bind(tangon)();
        michal = michal.ReleaseChannel;
        tangon = 1;
        tangon = golfie[tangon];
        report = oscard.bind(entity)(tangon);
        tangon = report.isAndroid;
        option = tangon.bind(report)();
        if(!option) { _fun00002_ip = 122; continue _fun00001 }
 97:
        report = michal.indexOf;
        tangon = 'canary';
        report = report.bind(michal)(tangon);
        tangon = -1;
        option = tangon === report;
 122:
        if(!option) { _fun00002_ip = 150; continue _fun00001 }
 125:
        report = michal.indexOf;
        tangon = 'beta';
        report = report.bind(michal)(tangon);
        tangon = -1;
        option = tangon === report;
 150:
        tangon = 'stable';
        report = tangon === michal;
        verify = michal.indexOf;
        tangon = 'debug';
        tangon = verify.bind(michal)(tangon);
        offset = -1;
        verify = offset !== tangon;
        if(verify) { _fun00002_ip = 207; continue _fun00001 }
 186:
        yankee = michal.indexOf;
        tangon = 'developer';
        tangon = yankee.bind(michal)(tangon);
        verify = offset !== tangon;
 207:
        tangon = !verify;
        if(verify) { _fun00002_ip = 222; continue _fun00001 }
 213:
        if(report) { _fun00002_ip = 219; continue _fun00001 }
 216:
        report = option;
 219:
        tangon = report;
 222:
        report = 2;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'utils/ReleaseChannelUtils.native.tsx';
        report = oscard.bind(golfie)(report);
        zuuluu['isStable'] = tangon;
        zuuluu['CurrentReleaseChannel'] = michal;
        return entity;
    }
})();