// app/modules/build_overrides/native/BuildOverrideUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        option = argBaz;
        zuuluu = argFre;
        offset = argPlu;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = option;
        var _closure1_slot2 = offset;
        oscard = function(argFoo) { // Original name: setBuildOverrideForBranch
            zuuluu = _closure1_slot7;
            michal = {};
            entity = 'branch';
            michal['type'] = entity;
            entity = argFoo;
            michal['id'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        var _closure1_slot6 = oscard;
        report = function() { // Original name: setBuildOverride
            entity = undefined;
            tangon = _closure1_slot8;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot7 = report;
        entity = function() { // Original name: _setBuildOverride
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot3;
            zuuluu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00004_ip = 183; continue _fun00003 }
 10:
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 3;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        oscard = report.bind(zuuluu)(michal);
                        report = oscard.applyStaffBuildOverride;
                        michal = {};
                        option = _closure1_slot5;
                        golfie = argFoo;
                        michal[option] = golfie;
                        michal = report.bind(oscard)(michal);
                        SaveGenerator(address=64);
 62:
                        return michal;
 64:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00004_ip = 180; continue _fun00003 }
 70:
                        oscard = michal.status;
                        report = 400;
                        if(!(report === oscard)) { _fun00004_ip = 147; continue _fun00003 }
 85:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        report = 5;
                        report = golfie[report];
                        golfie = oscard.bind(zuuluu)(report);
                        oscard = golfie.show;
                        report = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        verify = michal.body;
                        option = _closure1_slot5;
                        option = verify[option];
                        report['body'] = option;
                        report = oscard.bind(golfie)(report);
                        _fun00004_ip = 177; continue _fun00003;
 147:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 4;
                        tangon = oscard[tangon];
                        report = report.bind(zuuluu)(tangon);
                        tangon = report.checkForUpdateAndReload;
                        tangon = tangon.bind(report)();
 177:
                        return zuuluu;
 180:
                        return michal;
 183:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot8 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot8 = entity;
        tangon = function() { // Original name: clearBuildOverride
            entity = undefined;
            tangon = _closure1_slot10;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot9 = tangon;
        entity = function() { // Original name: _clearBuildOverride
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot3;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 164; continue _fun00005 }
 10:
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 3;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(michal);
                        michal = report.clearBuildOverride;
                        michal = michal.bind(report)();
                        SaveGenerator(address=49);
 47:
                        return michal;
 49:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00006_ip = 161; continue _fun00005 }
 55:
                        oscard = michal.status;
                        report = 400;
                        if(!(report === oscard)) { _fun00006_ip = 128; continue _fun00005 }
 70:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        report = 5;
                        report = golfie[report];
                        golfie = oscard.bind(zuuluu)(report);
                        oscard = golfie.show;
                        report = {'title': 'Clear Override Error', 'body': null, 'isDismissable': true};
                        option = michal.body;
                        report['body'] = option;
                        report = oscard.bind(golfie)(report);
                        _fun00006_ip = 158; continue _fun00005;
 128:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 4;
                        tangon = oscard[tangon];
                        report = report.bind(zuuluu)(tangon);
                        tangon = report.checkForUpdateAndReload;
                        tangon = tangon.bind(report)();
 158:
                        return zuuluu;
 161:
                        return michal;
 164:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot10 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot10 = entity;
        entity = function() { // Original name: _toggleOverride
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot3;
            zuuluu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        verify = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00008_ip = 381; continue _fun00007 }
 13:
                        tangon = _closure1_slot4;
                        michal = tangon.getCurrentBuildOverride;
                        michal = michal.bind(tangon)();
                        report = michal.overrides;
                        oscard = null;
                        tangon = oscard == report;
                        michal = undefined;
                        golfie = undefined;
                        if(tangon) { _fun00008_ip = 71; continue _fun00007 }
 49:
                        tangon = _closure1_slot5;
                        tangon = report[tangon];
                        report = oscard == tangon;
                        golfie = undefined;
                        if(report) { _fun00008_ip = 71; continue _fun00007 }
 66:
                        golfie = tangon.id;
 71:
                        report = _closure1_slot4;
                        tangon = report.getBuildOverride;
                        tangon = tangon.bind(report)(verify);
                        option = tangon.override;
                        offset = oscard == option;
                        report = undefined;
                        if(offset) { _fun00008_ip = 138; continue _fun00007 }
 101:
                        offset = option.targetBuildOverride;
                        option = oscard == offset;
                        report = undefined;
                        if(option) { _fun00008_ip = 138; continue _fun00007 }
 116:
                        option = _closure1_slot5;
                        option = offset[option];
                        offset = oscard == option;
                        report = undefined;
                        if(offset) { _fun00008_ip = 138; continue _fun00007 }
 133:
                        report = option.id;
 138:
                        if(!(golfie !== report)) { _fun00008_ip = 370; continue _fun00007 }
 145:
                        golfie = tangon.payload;
                        if(!(oscard != golfie)) { _fun00008_ip = 378; continue _fun00007 }
 158:
                        option = _closure1_slot0;
                        offset = _closure1_slot2;
                        golfie = 6;
                        golfie = offset[golfie];
                        option = option.bind(michal)(golfie);
                        golfie = option.isManualBuildOverrideLink;
                        golfie = golfie.bind(option)(verify);
                        if(!golfie) { _fun00008_ip = 199; continue _fun00007 }
 192:
                        if(!(oscard == report)) { _fun00008_ip = 358; continue _fun00007 }
 199:
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        oscard = 3;
                        oscard = option[oscard];
                        golfie = golfie.bind(michal)(oscard);
                        oscard = golfie.applyPublicBuildOverride;
                        tangon = tangon.payload;
                        tangon = oscard.bind(golfie)(tangon);
                        SaveGenerator(address=240);
 238:
                        return tangon;
 240:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(oscard) { _fun00008_ip = 355; continue _fun00007 }
 246:
                        golfie = tangon.status;
                        oscard = 400;
                        if(!(oscard === golfie)) { _fun00008_ip = 323; continue _fun00007 }
 261:
                        golfie = _closure1_slot1;
                        option = _closure1_slot2;
                        oscard = 5;
                        oscard = option[oscard];
                        option = golfie.bind(michal)(oscard);
                        golfie = option.show;
                        oscard = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        offset = tangon.body;
                        verify = _closure1_slot5;
                        verify = offset[verify];
                        oscard['body'] = verify;
                        oscard = golfie.bind(option)(oscard);
                        _fun00008_ip = 378; continue _fun00007;
 323:
                        golfie = _closure1_slot1;
                        option = _closure1_slot2;
                        oscard = 4;
                        oscard = option[oscard];
                        golfie = golfie.bind(michal)(oscard);
                        oscard = golfie.checkForUpdateAndReload;
                        oscard = oscard.bind(golfie)();
                        _fun00008_ip = 378; continue _fun00007;
 355:
                        return tangon;
 358:
                        tangon = _closure1_slot6;
                        tangon = tangon.bind(michal)(report);
                        return michal;
 370:
                        zuuluu = _closure1_slot9;
                        zuuluu = zuuluu.bind(michal)();
 378:
                        return michal;
 381:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot11 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot11 = entity;
        entity = function() { // Original name: _setBuildOverrideFromLink
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot3;
            zuuluu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00010_ip = 320; continue _fun00009 }
 10:
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.getCurrentBuildOverride;
                        michal = michal.bind(zuuluu)();
                        report = michal.overrides;
                        oscard = null;
                        zuuluu = oscard == report;
                        michal = undefined;
                        golfie = undefined;
                        if(zuuluu) { _fun00010_ip = 68; continue _fun00009 }
 46:
                        zuuluu = _closure1_slot5;
                        zuuluu = report[zuuluu];
                        report = oscard == zuuluu;
                        golfie = undefined;
                        if(report) { _fun00010_ip = 68; continue _fun00009 }
 63:
                        golfie = zuuluu.id;
 68:
                        option = _closure1_slot4;
                        report = option.getBuildOverride;
                        zuuluu = argFoo;
                        zuuluu = report.bind(option)(zuuluu);
                        option = zuuluu.override;
                        verify = oscard == option;
                        report = undefined;
                        if(verify) { _fun00010_ip = 138; continue _fun00009 }
 101:
                        verify = option.targetBuildOverride;
                        option = oscard == verify;
                        report = undefined;
                        if(option) { _fun00010_ip = 138; continue _fun00009 }
 116:
                        option = _closure1_slot5;
                        option = verify[option];
                        verify = oscard == option;
                        report = undefined;
                        if(verify) { _fun00010_ip = 138; continue _fun00009 }
 133:
                        report = option.id;
 138:
                        if(!(golfie !== report)) { _fun00010_ip = 317; continue _fun00009 }
 145:
                        report = zuuluu.payload;
                        if(!(oscard != report)) { _fun00010_ip = 317; continue _fun00009 }
 158:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 3;
                        report = golfie[report];
                        oscard = oscard.bind(michal)(report);
                        report = oscard.applyPublicBuildOverride;
                        zuuluu = zuuluu.payload;
                        zuuluu = report.bind(oscard)(zuuluu);
                        SaveGenerator(address=199);
 197:
                        return zuuluu;
 199:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00010_ip = 314; continue _fun00009 }
 205:
                        oscard = zuuluu.status;
                        report = 400;
                        if(!(report === oscard)) { _fun00010_ip = 282; continue _fun00009 }
 220:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        report = 5;
                        report = golfie[report];
                        golfie = oscard.bind(michal)(report);
                        oscard = golfie.show;
                        report = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        verify = zuuluu.body;
                        option = _closure1_slot5;
                        option = verify[option];
                        report['body'] = option;
                        report = oscard.bind(golfie)(report);
                        _fun00010_ip = 317; continue _fun00009;
 282:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 4;
                        tangon = oscard[tangon];
                        report = report.bind(michal)(tangon);
                        tangon = report.checkForUpdateAndReload;
                        tangon = tangon.bind(report)();
                        _fun00010_ip = 317; continue _fun00009;
 314:
                        return zuuluu;
 317:
                        return michal;
 320:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot12 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot12 = entity;
        entity = global;
        romeon = entity.Object;
        yankee = romeon.defineProperty;
        golfie = {};
        entity = true;
        golfie['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeon)(zuuluu, entity, golfie);
        entity = 0;
        golfie = offset[entity];
        entity = undefined;
        golfie = option.bind(entity)(golfie);
        var _closure1_slot3 = golfie;
        golfie = 1;
        golfie = offset[golfie];
        golfie = option.bind(entity)(golfie);
        var _closure1_slot4 = golfie;
        golfie = 2;
        golfie = offset[golfie];
        option = verify.bind(entity)(golfie);
        golfie = option.isAndroid;
        option = golfie.bind(option)();
        golfie = 'discord_ios';
        if(!option) { _fun00002_ip = 190; continue _fun00001 }
 184:
        golfie = 'discord_android';
 190:
        var _closure1_slot5 = golfie;
        option = 7;
        option = offset[option];
        offset = verify.bind(entity)(option);
        verify = offset.fileFinishedImporting;
        option = 'modules/build_overrides/native/BuildOverrideUtils.tsx';
        option = verify.bind(offset)(option);
        zuuluu['DEVICE_FIELD'] = golfie;
        zuuluu['setBuildOverrideForBranch'] = oscard;
        oscard = function(argFoo) { // Original name: setBuildOverrideForId
            zuuluu = _closure1_slot7;
            michal = {};
            entity = 'id';
            michal['type'] = entity;
            entity = argFoo;
            michal['id'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        zuuluu['setBuildOverrideForId'] = oscard;
        zuuluu['setBuildOverride'] = report;
        report = function() { // Original name: refreshBuildOverride
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.checkForUpdateAndReload;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        zuuluu['refreshBuildOverride'] = report;
        zuuluu['clearBuildOverride'] = tangon;
        tangon = function() { // Original name: toggleOverride
            entity = undefined;
            tangon = _closure1_slot11;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['toggleOverride'] = tangon;
        michal = function() { // Original name: setBuildOverrideFromLink
            entity = undefined;
            tangon = _closure1_slot12;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['setBuildOverrideFromLink'] = michal;
        return entity;
    }
})();