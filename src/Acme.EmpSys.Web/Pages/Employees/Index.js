﻿$(function () {
    var l = abp.localization.getResource('EmpSys');
    var createModal = new abp.ModalManager(abp.appPath + 'Employees/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Employees/EditModal');

    var dataTable = $('#EmployeesTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, "asc"]],
            searching: true,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(acme.empSys.employees.employee.getList),
            columnDefs: [
                {
                    title: l('Actions'),
                    rowAction: {
                        items:
                            [
                                {
                                    text: l('Edit'),
                                    visible: abp.auth.isGranted('EmpSys.Employees.Edit'), //CHECK for the PERMISSION
                                    action: function (data) {
                                        editModal.open({ id: data.record.id });
                                    }
                                },

                                {
                                    text: l('Delete'),
                                    visible: abp.auth.isGranted('EmpSys.Employees.Delete'),
                                    confirmMessage: function (data) {
                                        return l('EmployeeDeletionConfirmationMessage', data.record.name);
                                    },
                                    action: function (data) {
                                        acme.empSys.employees.employee
                                            .delete(data.record.id)
                                            .then(function () {
                                                abp.notify.info(l('SuccessfullyDeleted'));
                                                dataTable.ajax.reload();
                                            });
                                    }
                                }

                            ]
                    }
                },
                {
                    title: l('Name'),
                    data: "name"
                },
                {
                    title: l('Department'),
                    data: "departmentName"
                },
                {
                    title: l('Age'),
                    data: "age"
                },
                {
                    title: l('Email'),
                    data: "email"
                },
                
                {
                    title: l('JoinDate'),
                    data: "joinDate",
                    render: function (data) {
                        return luxon
                            .DateTime
                            .fromISO(data, {
                                locale: abp.localization.currentCulture.name
                            }).toLocaleString();
                    }
                },
                {
                    title: l('Salary'),
                    data: "salary"
                },
                {
                    title: l('CreationTime'), data: "creationTime",
                    render: function (data) {
                        return luxon
                            .DateTime
                            .fromISO(data, {
                                locale: abp.localization.currentCulture.name
                            }).toLocaleString(luxon.DateTime.DATETIME_SHORT);
                    }
                }
            ]
        })
    );
    createModal.onResult(function () {
        dataTable.ajax.reload();
    });

    editModal.onResult(function () {
        dataTable.ajax.reload();
    });

    $('#NewEmployeeButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });

});
