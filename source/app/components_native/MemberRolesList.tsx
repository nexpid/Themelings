// app/components_native/MemberRolesList.tsx
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot3 = options;
    options = tango.StyleSheet;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    golf = options.create;
    tango = {};
    verify = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center'};
    tango['wrapper'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/MemberRolesList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: MemberRolesList
        _fun91946: for(var _fun91946_ip = 0; ; ) switch(_fun91946_ip) {
 0:
            entity = argFoo;
            zulu = entity.userRoles;
            var _closure2_slot0 = zulu;
            tango = entity.guild;
            var _closure2_slot1 = tango;
            options = entity.style;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            report = undefined;
            verify = tango.bind(report)(entity);
            oscar = verify.useStateFromStores;
            entity = _closure1_slot4;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getRoles;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(verify)(tango, entity);
            verify = _closure1_slot5;
            tango = _closure1_slot3;
            entity = {};
            verify = verify.bind(report)(tango, entity);
            tango = null;
            entity = verify;
            if(!(tango != zulu)) { _fun91946_ip = 242; continue _fun91946 }
 112:
            tango = zulu.length;
            zulu = 0;
            entity = verify;
            if(!(tango > zulu)) { _fun91946_ip = 242; continue _fun91946 }
 126:
            zulu = global;
            tango = zulu.Object;
            zulu = tango.values;
            oscar = zulu.bind(tango)(oscar);
            tango = oscar.filter;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = tango.bind(oscar)(zulu);
            tango = oscar.sort;
            zulu = function(argFoo, argBar) {
                _fun91949: for(var _fun91949_ip = 0; ; ) switch(_fun91949_ip) {
 0:
                    entity = argFoo;
                    tango = entity.tags;
                    mike = null;
                    report = mike == tango;
                    zulu = undefined;
                    if(report) { _fun91949_ip = 26; continue _fun91949 }
 20:
                    zulu = tango.guild_connections;
 26:
                    report = mike !== zulu;
                    zulu = argBar;
                    zulu = zulu.tags;
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun91949_ip = 54; continue _fun91949 }
 48:
                    entity = zulu.guild_connections;
 54:
                    zulu = mike !== entity;
                    if(!report) { _fun91949_ip = 67; continue _fun91949 }
 61:
                    entity = 1;
                    if(!zulu) { _fun91949_ip = 86; continue _fun91949 }
 67:
                    mike = 0;
                    if(report) { _fun91949_ip = 83; continue _fun91949 }
 72:
                    mike = 0;
                    if(!zulu) { _fun91949_ip = 83; continue _fun91949 }
 77:
                    mike = -1;
 83:
                    entity = mike;
 86:
                    return entity;
                }
            };
            tango = tango.bind(oscar)(zulu);
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot5;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 5;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                mike['role'] = entity;
                oscar = _closure2_slot1;
                oscar = oscar.id;
                mike['guildId'] = oscar;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            oscar = zulu.bind(tango)(mike);
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            golf = _closure1_slot6;
            verify = golf.wrapper;
            golf = new Array(2);
            golf[0] = verify;
            golf[1] = options;
            mike['style'] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 242:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();