// app/modules/soundboard/native/SoundboardHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SoundboardOrientationConfig;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot8 = tango;
    tango = function() { // Original name: useOrientationConfig
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 6;
        zulu = zulu[mike];
        mike = undefined;
        zulu = tango.bind(mike)(zulu);
        mike = zulu.useOrientation;
        mike = mike.bind(zulu)();
        entity = _closure1_slot7;
        entity = entity[mike];
        entity = entity.alternate;
        return entity;
    };
    var _closure1_slot9 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/native/SoundboardHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        entity = {};
        zulu = _closure1_slot9;
        mike = undefined;
        mike = zulu.bind(mike)();
        mike = mike.soundsPerRow;
        entity['soundsPerRow'] = mike;
        return entity;
    };
    zulu['useSoundPickerListStyleConfig'] = tango;
    tango = function() {
        entity = _closure1_slot9;
        tango = undefined;
        mike = entity.bind(tango)();
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 7;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.bind(tango)();
        oscar = entity.width;
        entity = {};
        tango = global;
        report = tango.Math;
        tango = report.min;
        zulu = _closure1_slot8;
        tango = tango.bind(report)(zulu, oscar);
        zulu = mike.soundRowPadding;
        zulu = tango - zulu;
        mike = mike.soundsPerRow;
        mike = zulu / mike;
        entity['buttonWidth'] = mike;
        return entity;
    };
    zulu['useSoundButtonStyleConfig'] = tango;
    mike = function(argFoo) {
        entity = argFoo;
        oscar = entity.shouldFetch;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        golf = _closure1_slot2;
        tango = 8;
        options = golf[tango];
        entity = undefined;
        yankee = report.bind(entity)(options);
        offset = yankee.useStateFromStores;
        options = _closure1_slot5;
        verify = new Array(1);
        verify[0] = options;
        options = function() {
            entity = _closure1_slot5;
            entity = entity.saturation;
            return entity;
        };
        options = offset.bind(yankee)(verify, options);
        tango = golf[tango];
        verify = report.bind(entity)(tango);
        golf = verify.useStateFromStores;
        tango = _closure1_slot6;
        report = new Array(1);
        report[0] = tango;
        tango = function() {
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.isThemeDark;
            entity = _closure1_slot6;
            entity = entity.theme;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf = golf.bind(verify)(report, tango);
        report = _closure1_slot4;
        tango = report.useEffect;
        zulu = new Array(3);
        zulu[0] = options;
        zulu[1] = golf;
        zulu[2] = oscar;
        mike = function() {
            mike = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun103526: for(var _fun103526_ip = 0; ; ) switch(_fun103526_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun103526_ip = 98; continue _fun103526 }
 7:
                            mike = _closure2_slot0;
                            if(!mike) { _fun103526_ip = 90; continue _fun103526 }
 17:
                            tango = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 10;
                            mike = report[mike];
                            zulu = undefined;
                            mike = tango.bind(zulu)(mike);
                            oscar = mike.FrecencyUserSettingsActionCreators;
                            mike = oscar.loadIfNecessary;
                            mike = mike.bind(oscar)();
                            mike = 11;
                            mike = report[mike];
                            zulu = tango.bind(zulu)(mike);
                            mike = zulu.maybeFetchSoundboardSounds;
                            mike = mike.bind(zulu)();
                            SaveGenerator(address=84);
 82:
                            return mike;
 84:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zulu) { _fun103526_ip = 95; continue _fun103526 }
 90:
                            zulu = undefined;
                            return zulu;
 95:
                            return mike;
 98:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            entity = undefined;
            mike = mike.bind(entity)();
            mike = mike.bind(entity)();
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useMaybeFetchSoundboardSounds'] = mike;
    return entity;
})();