// app/modules/guild_progress/native/components/GuildProgressBar.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = yankee;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot3 = golf;
    tango = tango.Animated;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 'relative';
    verify['position'] = offset;
    offset = 4;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.PROGRESS_BACKGROUND_COLOR;
    verify['backgroundColor'] = offset;
    offset = 5;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.xs;
    verify['borderRadius'] = romeo;
    romeo = 8;
    verify['height'] = romeo;
    tango['wrapper'] = verify;
    verify = {'position': 'absolute', 'height': 8};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BRAND;
    verify['backgroundColor'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xs;
    verify['borderRadius'] = offset;
    tango['progress'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_progress/native/components/GuildProgressBar.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildProgressBar
        mike = argFoo;
        verify = mike.percent;
        var _closure2_slot0 = verify;
        options = mike.style;
        mike = _closure1_slot6;
        tango = undefined;
        golf = mike.bind(tango)();
        zulu = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 6;
        mike = oscar[mike];
        zulu = zulu.bind(tango)(mike);
        mike = function() {
            entity = _closure1_slot4;
            zulu = entity.Value;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 0;
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        yankee = zulu.bind(tango)(mike);
        var _closure2_slot1 = yankee;
        oscar = _closure1_slot2;
        zulu = oscar.useEffect;
        mike = new Array(2);
        mike[0] = verify;
        mike[1] = yankee;
        entity = function() {
            tango = _closure1_slot4;
            zulu = tango.timing;
            mike = _closure2_slot1;
            entity = {'toValue': null, 'duration': 700, 'useNativeDriver': false};
            report = _closure2_slot0;
            entity['toValue'] = report;
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.start;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot5;
        mike = _closure1_slot3;
        entity = {};
        verify = golf.wrapper;
        oscar = new Array(2);
        oscar[0] = verify;
        oscar[1] = options;
        entity['style'] = oscar;
        report = _closure1_slot4;
        oscar = report.View;
        report = {};
        options = golf.progress;
        golf = new Array(2);
        golf[0] = options;
        options = {};
        offset = yankee.interpolate;
        verify = {};
        romeo = [0, 100];
        verify['inputRange'] = romeo;
        romeo = ['0%', '100%'];
        verify['outputRange'] = romeo;
        verify = offset.bind(yankee)(verify);
        options['width'] = verify;
        golf[1] = options;
        report['style'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();