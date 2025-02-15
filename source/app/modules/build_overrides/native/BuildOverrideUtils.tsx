// app/modules/build_overrides/native/BuildOverrideUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        options = argBaz;
        zulu = argFred;
        offset = argPlugh;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = options;
        var _closure1_slot2 = offset;
        oscar = function(argFoo) { // Original name: setBuildOverrideForBranch
            zulu = _closure1_slot7;
            mike = {};
            entity = 'branch';
            mike['type'] = entity;
            entity = argFoo;
            mike['id'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        var _closure1_slot6 = oscar;
        report = function() { // Original name: setBuildOverride
            entity = undefined;
            tango = _closure1_slot8;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot7 = report;
        entity = function() { // Original name: _setBuildOverride
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00004_ip = 187; continue _fun00003 }
 10:
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 3;
                        mike = zulu[mike];
                        zulu = undefined;
                        oscar = report.bind(zulu)(mike);
                        report = oscar.applyStaffBuildOverride;
                        mike = {};
                        options = _closure1_slot5;
                        golf = argFoo;
                        mike[options] = golf;
                        mike = report.bind(oscar)(mike);
                        SaveGenerator(address=64);
 62:
                        return mike;
 64:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00004_ip = 184; continue _fun00003 }
 70:
                        oscar = mike.status;
                        report = 400;
                        if(!(report === oscar)) { _fun00004_ip = 151; continue _fun00003 }
 85:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        report = 5;
                        report = golf[report];
                        golf = oscar.bind(zulu)(report);
                        oscar = golf.show;
                        report = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        verify = mike.body;
                        options = _closure1_slot5;
                        options = verify[options];
                        report['body'] = options;
                        report = oscar.bind(golf)(report);
                        _fun00004_ip = 181; continue _fun00003;
 151:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 4;
                        tango = oscar[tango];
                        report = report.bind(zulu)(tango);
                        tango = report.checkForUpdateAndReload;
                        tango = tango.bind(report)();
 181:
                        return zulu;
 184:
                        return mike;
 187:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot8 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot8 = entity;
        tango = function() { // Original name: clearBuildOverride
            entity = undefined;
            tango = _closure1_slot10;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot9 = tango;
        entity = function() { // Original name: _clearBuildOverride
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00006_ip = 164; continue _fun00005 }
 10:
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 3;
                        mike = zulu[mike];
                        zulu = undefined;
                        report = report.bind(zulu)(mike);
                        mike = report.clearBuildOverride;
                        mike = mike.bind(report)();
                        SaveGenerator(address=49);
 47:
                        return mike;
 49:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00006_ip = 161; continue _fun00005 }
 55:
                        oscar = mike.status;
                        report = 400;
                        if(!(report === oscar)) { _fun00006_ip = 128; continue _fun00005 }
 70:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        report = 5;
                        report = golf[report];
                        golf = oscar.bind(zulu)(report);
                        oscar = golf.show;
                        report = {'title': 'Clear Override Error', 'body': null, 'isDismissable': true};
                        options = mike.body;
                        report['body'] = options;
                        report = oscar.bind(golf)(report);
                        _fun00006_ip = 158; continue _fun00005;
 128:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 4;
                        tango = oscar[tango];
                        report = report.bind(zulu)(tango);
                        tango = report.checkForUpdateAndReload;
                        tango = tango.bind(report)();
 158:
                        return zulu;
 161:
                        return mike;
 164:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot10 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot10 = entity;
        entity = function() { // Original name: _toggleOverride
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        verify = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00008_ip = 385; continue _fun00007 }
 13:
                        tango = _closure1_slot4;
                        mike = tango.getCurrentBuildOverride;
                        mike = mike.bind(tango)();
                        report = mike.overrides;
                        oscar = null;
                        tango = oscar == report;
                        mike = undefined;
                        golf = undefined;
                        if(tango) { _fun00008_ip = 71; continue _fun00007 }
 49:
                        tango = _closure1_slot5;
                        tango = report[tango];
                        report = oscar == tango;
                        golf = undefined;
                        if(report) { _fun00008_ip = 71; continue _fun00007 }
 66:
                        golf = tango.id;
 71:
                        report = _closure1_slot4;
                        tango = report.getBuildOverride;
                        tango = tango.bind(report)(verify);
                        options = tango.override;
                        offset = oscar == options;
                        report = undefined;
                        if(offset) { _fun00008_ip = 138; continue _fun00007 }
 101:
                        offset = options.targetBuildOverride;
                        options = oscar == offset;
                        report = undefined;
                        if(options) { _fun00008_ip = 138; continue _fun00007 }
 116:
                        options = _closure1_slot5;
                        options = offset[options];
                        offset = oscar == options;
                        report = undefined;
                        if(offset) { _fun00008_ip = 138; continue _fun00007 }
 133:
                        report = options.id;
 138:
                        if(!(golf !== report)) { _fun00008_ip = 374; continue _fun00007 }
 145:
                        golf = tango.payload;
                        if(!(oscar != golf)) { _fun00008_ip = 382; continue _fun00007 }
 158:
                        options = _closure1_slot0;
                        offset = _closure1_slot2;
                        golf = 6;
                        golf = offset[golf];
                        options = options.bind(mike)(golf);
                        golf = options.isManualBuildOverrideLink;
                        golf = golf.bind(options)(verify);
                        if(!golf) { _fun00008_ip = 199; continue _fun00007 }
 192:
                        if(!(oscar == report)) { _fun00008_ip = 362; continue _fun00007 }
 199:
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        oscar = 3;
                        oscar = options[oscar];
                        golf = golf.bind(mike)(oscar);
                        oscar = golf.applyPublicBuildOverride;
                        tango = tango.payload;
                        tango = oscar.bind(golf)(tango);
                        SaveGenerator(address=240);
 238:
                        return tango;
 240:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(oscar) { _fun00008_ip = 359; continue _fun00007 }
 246:
                        golf = tango.status;
                        oscar = 400;
                        if(!(oscar === golf)) { _fun00008_ip = 327; continue _fun00007 }
 261:
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 5;
                        oscar = options[oscar];
                        options = golf.bind(mike)(oscar);
                        golf = options.show;
                        oscar = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        offset = tango.body;
                        verify = _closure1_slot5;
                        verify = offset[verify];
                        oscar['body'] = verify;
                        oscar = golf.bind(options)(oscar);
                        _fun00008_ip = 382; continue _fun00007;
 327:
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 4;
                        oscar = options[oscar];
                        golf = golf.bind(mike)(oscar);
                        oscar = golf.checkForUpdateAndReload;
                        oscar = oscar.bind(golf)();
                        _fun00008_ip = 382; continue _fun00007;
 359:
                        return tango;
 362:
                        tango = _closure1_slot6;
                        tango = tango.bind(mike)(report);
                        return mike;
 374:
                        zulu = _closure1_slot9;
                        zulu = zulu.bind(mike)();
 382:
                        return mike;
 385:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot11 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot11 = entity;
        entity = function() { // Original name: _setBuildOverrideFromLink
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00010_ip = 324; continue _fun00009 }
 10:
                        zulu = _closure1_slot4;
                        mike = zulu.getCurrentBuildOverride;
                        mike = mike.bind(zulu)();
                        report = mike.overrides;
                        oscar = null;
                        zulu = oscar == report;
                        mike = undefined;
                        golf = undefined;
                        if(zulu) { _fun00010_ip = 68; continue _fun00009 }
 46:
                        zulu = _closure1_slot5;
                        zulu = report[zulu];
                        report = oscar == zulu;
                        golf = undefined;
                        if(report) { _fun00010_ip = 68; continue _fun00009 }
 63:
                        golf = zulu.id;
 68:
                        options = _closure1_slot4;
                        report = options.getBuildOverride;
                        zulu = argFoo;
                        zulu = report.bind(options)(zulu);
                        options = zulu.override;
                        verify = oscar == options;
                        report = undefined;
                        if(verify) { _fun00010_ip = 138; continue _fun00009 }
 101:
                        verify = options.targetBuildOverride;
                        options = oscar == verify;
                        report = undefined;
                        if(options) { _fun00010_ip = 138; continue _fun00009 }
 116:
                        options = _closure1_slot5;
                        options = verify[options];
                        verify = oscar == options;
                        report = undefined;
                        if(verify) { _fun00010_ip = 138; continue _fun00009 }
 133:
                        report = options.id;
 138:
                        if(!(golf !== report)) { _fun00010_ip = 321; continue _fun00009 }
 145:
                        report = zulu.payload;
                        if(!(oscar != report)) { _fun00010_ip = 321; continue _fun00009 }
 158:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        report = 3;
                        report = golf[report];
                        oscar = oscar.bind(mike)(report);
                        report = oscar.applyPublicBuildOverride;
                        zulu = zulu.payload;
                        zulu = report.bind(oscar)(zulu);
                        SaveGenerator(address=199);
 197:
                        return zulu;
 199:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00010_ip = 318; continue _fun00009 }
 205:
                        oscar = zulu.status;
                        report = 400;
                        if(!(report === oscar)) { _fun00010_ip = 286; continue _fun00009 }
 220:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        report = 5;
                        report = golf[report];
                        golf = oscar.bind(mike)(report);
                        oscar = golf.show;
                        report = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        verify = zulu.body;
                        options = _closure1_slot5;
                        options = verify[options];
                        report['body'] = options;
                        report = oscar.bind(golf)(report);
                        _fun00010_ip = 321; continue _fun00009;
 286:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 4;
                        tango = oscar[tango];
                        report = report.bind(mike)(tango);
                        tango = report.checkForUpdateAndReload;
                        tango = tango.bind(report)();
                        _fun00010_ip = 321; continue _fun00009;
 318:
                        return zulu;
 321:
                        return mike;
 324:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot12 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot12 = entity;
        entity = global;
        romeo = entity.Object;
        yankee = romeo.defineProperty;
        golf = {};
        entity = true;
        golf['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeo)(zulu, entity, golf);
        entity = 0;
        golf = offset[entity];
        entity = undefined;
        golf = options.bind(entity)(golf);
        var _closure1_slot3 = golf;
        golf = 1;
        golf = offset[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot4 = golf;
        golf = 2;
        golf = offset[golf];
        options = verify.bind(entity)(golf);
        golf = options.isAndroid;
        options = golf.bind(options)();
        golf = 'discord_ios';
        if(!options) { _fun00002_ip = 204; continue _fun00001 }
 198:
        golf = 'discord_android';
 204:
        var _closure1_slot5 = golf;
        options = 7;
        options = offset[options];
        offset = verify.bind(entity)(options);
        verify = offset.fileFinishedImporting;
        options = 'modules/build_overrides/native/BuildOverrideUtils.tsx';
        options = verify.bind(offset)(options);
        zulu['DEVICE_FIELD'] = golf;
        zulu['setBuildOverrideForBranch'] = oscar;
        oscar = function(argFoo) { // Original name: setBuildOverrideForId
            zulu = _closure1_slot7;
            mike = {};
            entity = 'id';
            mike['type'] = entity;
            entity = argFoo;
            mike['id'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        zulu['setBuildOverrideForId'] = oscar;
        zulu['setBuildOverride'] = report;
        report = function() { // Original name: refreshBuildOverride
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.checkForUpdateAndReload;
            mike = mike.bind(zulu)();
            return entity;
        };
        zulu['refreshBuildOverride'] = report;
        zulu['clearBuildOverride'] = tango;
        tango = function() { // Original name: toggleOverride
            entity = undefined;
            tango = _closure1_slot11;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['toggleOverride'] = tango;
        mike = function() { // Original name: setBuildOverrideFromLink
            entity = undefined;
            tango = _closure1_slot12;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['setBuildOverrideFromLink'] = mike;
        return entity;
    }
})();