// app/modules/messages/native/renderer/rows/Loading.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    offset = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.LoadingType;
    var _closure1_slot4 = report;
    report = tango.RowType;
    var _closure1_slot5 = report;
    tango = tango.SeparatorAction;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createNativeStyleProperties;
    tango = {};
    verify = 4;
    yankee = golf[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_ACCENT;
    tango['loadButtonBackgroundColor'] = yankee;
    yankee = golf[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.unsafe_rawColors;
    yankee = yankee.WHITE_500;
    tango['loadButtonColor'] = yankee;
    verify = golf[verify];
    verify = offset.bind(entity)(verify);
    verify = verify.colors;
    verify = verify.BACKGROUND_ACCENT;
    tango['loadingColor'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot8 = tango;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/native/renderer/rows/Loading.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: Loading
        _fun72714: for(var _fun72714_ip = 0; ; ) switch(_fun72714_ip) {
 0:
            entity = argFoo;
            entity = entity.row;
            tango = undefined;
            var _closure2_slot2 = tango;
            options = entity.rowType;
            offset = entity.text;
            var _closure2_slot0 = offset;
            report = entity.isLoading;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 5;
            zulu = golf[zulu];
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.useMessageRendererTheme;
            oscar = zulu.bind(oscar)();
            zulu = _closure1_slot8;
            golf = zulu.bind(tango)(oscar);
            var _closure2_slot1 = golf;
            zulu = _closure1_slot4;
            zulu = zulu.LOAD_BEFORE;
            if(!(options !== zulu)) { _fun72714_ip = 110; continue _fun72714 }
 98:
            zulu = _closure1_slot6;
            yankee = zulu.LOAD_MORE_AFTER;
            _fun72714_ip = 120; continue _fun72714;
 110:
            zulu = _closure1_slot6;
            yankee = zulu.LOAD_MORE_BEFORE;
 120:
            _closure2_slot2 = yankee;
            verify = _closure1_slot3;
            oscar = verify.useMemo;
            zulu = new Array(3);
            zulu[0] = yankee;
            zulu[1] = golf;
            zulu[2] = offset;
            mike = function() {
                entity = {};
                zulu = {};
                tango = _closure2_slot2;
                zulu['type'] = tango;
                entity['action'] = zulu;
                zulu = _closure2_slot1;
                zulu = zulu.loadButtonBackgroundColor;
                entity['backgroundColor'] = zulu;
                zulu = 4;
                entity['cornerRadius'] = zulu;
                mike = _closure2_slot0;
                entity['text'] = mike;
                return entity;
            };
            oscar = oscar.bind(verify)(mike, zulu);
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Loading;
            entity = {};
            entity['id'] = options;
            entity['button'] = oscar;
            if(report) { _fun72714_ip = 214; continue _fun72714 }
 206:
            oscar = golf.loadButtonColor;
            _fun72714_ip = 220; continue _fun72714;
 214:
            oscar = golf.loadingColor;
 220:
            entity['color'] = oscar;
            entity['isLoading'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['resolveBaseColors'] = tango;
    mike = function(argFoo, argBar) { // Original name: generateLoadingRowData
        _fun72716: for(var _fun72716_ip = 0; ; ) switch(_fun72716_ip) {
 0:
            entity = argFoo;
            tango = entity.rowType;
            zulu = entity.changeType;
            oscar = entity.text;
            mike = entity.isLoading;
            options = _closure1_slot8;
            report = undefined;
            entity = argBar;
            report = options.bind(report)(entity);
            entity = _closure1_slot4;
            entity = entity.LOAD_BEFORE;
            if(!(tango !== entity)) { _fun72716_ip = 69; continue _fun72716 }
 57:
            entity = _closure1_slot6;
            options = entity.LOAD_MORE_AFTER;
            _fun72716_ip = 79; continue _fun72716;
 69:
            entity = _closure1_slot6;
            options = entity.LOAD_MORE_BEFORE;
 79:
            entity = {};
            golf = _closure1_slot5;
            golf = golf.LOADING;
            entity['type'] = golf;
            entity['id'] = tango;
            tango = {};
            golf = {};
            golf['type'] = options;
            tango['action'] = golf;
            golf = report.loadButtonBackgroundColor;
            tango['backgroundColor'] = golf;
            golf = 4;
            tango['cornerRadius'] = golf;
            tango['text'] = oscar;
            entity['button'] = tango;
            if(mike) { _fun72716_ip = 149; continue _fun72716 }
 141:
            tango = report.loadButtonColor;
            _fun72716_ip = 155; continue _fun72716;
 149:
            tango = report.loadingColor;
 155:
            entity['color'] = tango;
            entity['changeType'] = zulu;
            entity['isLoading'] = mike;
            return entity;
        }
    };
    zulu['generateLoadingRowData'] = mike;
    return entity;
})();